import React, { useState } from "react";

const reportsData = [
    {
        reportedBy: { name: "John Doe", profilePic: "https://example.com/johndoe.jpg" },
        reportType: "Public Post",
        reportMessage: "Scam or Fraud",
        reportedContent: "https://example.com/image1.png",
        itemPostedBy: { name: "Jane Smith", profilePic: "https://example.com/janesmith.jpg" },
        createdDate: "Jan 4, 2024",
        status: "" // Default empty
    },
    {
        reportedBy: { name: "Alice Brown", profilePic: "https://example.com/alicebrown.jpg" },
        reportType: "Kicks Post",
        reportMessage: "Self-Injury",
        reportedContent: "https://example.com/image2.png",
        itemPostedBy: { name: "Bob White", profilePic: "https://example.com/bobwhite.jpg" },
        createdDate: "Jan 5, 2024",
        status: "" // Default empty
    }
];

const ReportsTable = () => {
    const [reports, setReports] = useState(reportsData);
    const [filter, setFilter] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedReportIndex, setSelectedReportIndex] = useState(null);
    const [selectedAction, setSelectedAction] = useState("");
    const actionOptions = ["Block User", "Delete Post", "Reject Report", "Delete User"];
    const filterOptions = ["Blocked User", "Deleted User", "Deleted Post", "Rejected Reports"];
    const [currentPage, setCurrentPage] = useState(1);
    const reportsPerPage = 5;
    
    const handleActionChange = (index, action) => {
        setSelectedReportIndex(index);
        setSelectedAction(action);
        setShowModal(true);
    };

    const confirmAction = () => {
        const updatedReports = [...reports];
        updatedReports[selectedReportIndex].status = selectedAction;
        setReports(updatedReports);
        setShowModal(false);
    };

    const filteredReports = filter
        ? reports.filter(report => filter === report.status)
        : reports;

    const indexOfLastReport = currentPage * reportsPerPage;
    const indexOfFirstReport = indexOfLastReport - reportsPerPage;
    const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);
    const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Dashboard &gt; Reports</h2>
                <div className="mb-4 m-0">
                    <select
                        className="p-1 border rounded"
                        onChange={(e) => setFilter(e.target.value)}
                        value={filter}
                    >
                        <option value="">All Reports</option>
                        {filterOptions.map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            <table className="w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">Reported By</th>
                        <th className="p-2 border">Report Type</th>
                        <th className="p-2 border">Report Message</th>
                        <th className="p-2 border">Reported Content</th>
                        <th className="p-2 border">Item Posted By</th>
                        <th className="p-2 border">Created Date</th>
                        <th className="p-2 border">Actions</th>
                        <th className="p-2 border">Admin center</th>
                    </tr>
                </thead>
                <tbody>
                    {currentReports.map((report, index) => (
                        <tr key={index} className="border">
                            <td className="p-2 border flex items-center space-x-2">
                                <img src={report.reportedBy.profilePic} alt={report.reportedBy.name} className="w-8 h-8 rounded-full" />
                                <span>{report.reportedBy.name}</span>
                            </td>
                            <td className="p-2 border">{report.reportType}</td>
                            <td className="p-2 border">{report.reportMessage}</td>
                            <td className="p-2 border">
                                <a href={report.reportedContent} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                    View Content
                                </a>
                            </td>
                            <td className="p-2 border flex items-center space-x-2">
                                <img src={report.itemPostedBy.profilePic} alt={report.itemPostedBy.name} className="w-8 h-8 rounded-full" />
                                <span>{report.itemPostedBy.name}</span>
                            </td>
                            <td className="p-2 border">{report.createdDate}</td>
                            <td className="p-2 border">
                                <select
                                    className="p-1 border rounded w-full"
                                    onChange={(e) => handleActionChange(index, e.target.value)}
                                    value={report.status}
                                >
                                    <option value="">Select Action</option>
                                    {actionOptions.map((action, idx) => (
                                        <option key={idx} value={action}>{action}</option>
                                    ))}
                                </select>
                                <div className="mt-1 text-sm text-gray-700">Status: {report.status ? report.status : "No action taken"}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>Home</h1>
            <div className="flex justify-center items-center mt-4">
                <button className="px-3 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>&lt;</button>
                <span className="px-4">Page {currentPage} of {totalPages}</span>
                <button className="px-3 py-1 mx-1 border rounded bg-gray-200 hover:bg-gray-300" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>&gt;</button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Confirm Action</h2>
                        <p>Are you sure you want to {selectedAction.toLowerCase()}?</p>
                        <div className="mt-4 flex justify-end space-x-4">
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={confirmAction}>Confirm</button>
                            <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReportsTable;