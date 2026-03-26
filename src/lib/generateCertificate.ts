import jsPDF from "jspdf";

interface CertificateData {
  name: string;
  course: string;
  date: string;
  grade: string;
  certId: string;
}

export const generateCertificatePDF = (data: CertificateData) => {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();

  // Background
  doc.setFillColor(10, 15, 25);
  doc.rect(0, 0, w, h, "F");

  // Border
  doc.setDrawColor(0, 188, 212);
  doc.setLineWidth(1.5);
  doc.rect(8, 8, w - 16, h - 16, "S");
  doc.setLineWidth(0.5);
  doc.rect(12, 12, w - 24, h - 24, "S");

  // Corner accents
  const cornerLen = 20;
  doc.setDrawColor(0, 188, 212);
  doc.setLineWidth(2);
  // Top-left
  doc.line(12, 12, 12 + cornerLen, 12);
  doc.line(12, 12, 12, 12 + cornerLen);
  // Top-right
  doc.line(w - 12, 12, w - 12 - cornerLen, 12);
  doc.line(w - 12, 12, w - 12, 12 + cornerLen);
  // Bottom-left
  doc.line(12, h - 12, 12 + cornerLen, h - 12);
  doc.line(12, h - 12, 12, h - 12 - cornerLen);
  // Bottom-right
  doc.line(w - 12, h - 12, w - 12 - cornerLen, h - 12);
  doc.line(w - 12, h - 12, w - 12, h - 12 - cornerLen);

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0, 188, 212);
  doc.text("TRINITY ACADEMY", w / 2, 32, { align: "center" });

  doc.setFontSize(8);
  doc.setTextColor(120, 140, 160);
  doc.text("A Unit of Trinity Tech Pvt. Ltd.", w / 2, 38, { align: "center" });

  // Divider line
  doc.setDrawColor(0, 188, 212);
  doc.setLineWidth(0.3);
  doc.line(w / 2 - 40, 42, w / 2 + 40, 42);

  // Certificate title
  doc.setFontSize(28);
  doc.setTextColor(230, 235, 240);
  doc.text("CERTIFICATE", w / 2, 58, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(120, 140, 160);
  doc.text("OF COMPLETION", w / 2, 66, { align: "center" });

  // "This is to certify that"
  doc.setFontSize(10);
  doc.setTextColor(150, 160, 175);
  doc.text("This is to certify that", w / 2, 80, { align: "center" });

  // Student name
  doc.setFontSize(24);
  doc.setTextColor(0, 188, 212);
  doc.text(data.name, w / 2, 92, { align: "center" });

  // Underline
  const nameWidth = doc.getTextWidth(data.name);
  doc.setDrawColor(0, 188, 212);
  doc.setLineWidth(0.5);
  doc.line(w / 2 - nameWidth / 2, 94, w / 2 + nameWidth / 2, 94);

  // Course text
  doc.setFontSize(10);
  doc.setTextColor(150, 160, 175);
  doc.text("has successfully completed the course", w / 2, 104, { align: "center" });

  doc.setFontSize(16);
  doc.setTextColor(230, 235, 240);
  doc.text(data.course, w / 2, 114, { align: "center" });

  // Grade
  doc.setFontSize(10);
  doc.setTextColor(150, 160, 175);
  doc.text(`with Grade: ${data.grade}`, w / 2, 124, { align: "center" });

  // Date
  doc.setFontSize(9);
  doc.setTextColor(100, 115, 130);
  doc.text(`Awarded on ${data.date}`, w / 2, 134, { align: "center" });

  // Signatures area
  const sigY = 160;
  doc.setDrawColor(80, 90, 100);
  doc.setLineWidth(0.3);
  // Left signature
  doc.line(40, sigY, 100, sigY);
  doc.setFontSize(8);
  doc.setTextColor(120, 140, 160);
  doc.text("Director", 70, sigY + 5, { align: "center" });
  doc.text("Trinity Academy", 70, sigY + 10, { align: "center" });

  // Right signature
  doc.line(w - 100, sigY, w - 40, sigY);
  doc.text("Course Instructor", w - 70, sigY + 5, { align: "center" });
  doc.text(data.course.split(" ")[0] + " Department", w - 70, sigY + 10, { align: "center" });

  // Certificate ID & verification
  doc.setFontSize(7);
  doc.setTextColor(80, 95, 110);
  doc.text(`Certificate ID: ${data.certId}`, w / 2, h - 22, { align: "center" });
  doc.text("Verify at: academy.trinitytech.com.np/verify", w / 2, h - 17, { align: "center" });

  // Save
  doc.save(`Trinity_Certificate_${data.certId}.pdf`);
};
