import jsPDF from "jspdf";

interface CertificateData {
  name: string;
  course: string;
  date: string;
  grade: string;
  certId: string;
}

const drawGoldBorder = (doc: jsPDF, w: number, h: number) => {
  // Outer border
  doc.setDrawColor(180, 150, 80);
  doc.setLineWidth(2.5);
  doc.rect(6, 6, w - 12, h - 12, "S");

  // Inner border
  doc.setDrawColor(200, 170, 90);
  doc.setLineWidth(0.8);
  doc.rect(10, 10, w - 20, h - 20, "S");

  // Decorative double line
  doc.setLineWidth(0.3);
  doc.rect(13, 13, w - 26, h - 26, "S");

  // Corner ornaments
  const cLen = 18;
  const offset = 13;
  doc.setLineWidth(1.5);
  doc.setDrawColor(180, 150, 80);

  // Top-left
  doc.line(offset, offset, offset + cLen, offset);
  doc.line(offset, offset, offset, offset + cLen);
  // Top-right
  doc.line(w - offset, offset, w - offset - cLen, offset);
  doc.line(w - offset, offset, w - offset, offset + cLen);
  // Bottom-left
  doc.line(offset, h - offset, offset + cLen, h - offset);
  doc.line(offset, h - offset, offset, h - offset - cLen);
  // Bottom-right
  doc.line(w - offset, h - offset, w - offset - cLen, h - offset);
  doc.line(w - offset, h - offset, w - offset, h - offset - cLen);
};

const drawSignature = (doc: jsPDF, x: number, y: number, name: string, title: string) => {
  // Signature scribble simulation
  doc.setDrawColor(40, 40, 60);
  doc.setLineWidth(0.6);

  // Stylized signature curves
  const startX = x - 20;
  const sigY = y - 6;

  // First stroke
  doc.line(startX, sigY, startX + 8, sigY - 4);
  doc.line(startX + 8, sigY - 4, startX + 14, sigY + 2);
  doc.line(startX + 14, sigY + 2, startX + 22, sigY - 3);
  doc.line(startX + 22, sigY - 3, startX + 30, sigY + 1);
  // Second stroke
  doc.line(startX + 12, sigY + 1, startX + 20, sigY - 5);
  doc.line(startX + 20, sigY - 5, startX + 35, sigY - 1);
  doc.line(startX + 35, sigY - 1, startX + 40, sigY - 4);

  // Signature line
  doc.setDrawColor(180, 150, 80);
  doc.setLineWidth(0.4);
  doc.line(x - 28, y, x + 28, y);

  // Name & title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(30, 30, 50);
  doc.text(name, x, y + 5, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(100, 100, 120);
  doc.text(title, x, y + 9, { align: "center" });
};

const drawSeal = (doc: jsPDF, cx: number, cy: number) => {
  // Outer ring
  doc.setDrawColor(180, 150, 80);
  doc.setLineWidth(1.2);
  doc.circle(cx, cy, 14, "S");
  doc.setLineWidth(0.4);
  doc.circle(cx, cy, 12, "S");
  doc.circle(cx, cy, 11, "S");

  // Inner detail
  doc.setFillColor(180, 150, 80);
  doc.circle(cx, cy, 3, "F");

  // Star points around center
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    const innerR = 4;
    const outerR = 7;
    const x1 = cx + Math.cos(angle) * innerR;
    const y1 = cy + Math.sin(angle) * innerR;
    const x2 = cx + Math.cos(angle) * outerR;
    const y2 = cy + Math.sin(angle) * outerR;
    doc.setLineWidth(0.5);
    doc.line(x1, y1, x2, y2);
  }

  // Text around seal
  doc.setFont("helvetica", "bold");
  doc.setFontSize(4);
  doc.setTextColor(180, 150, 80);
  doc.text("TRINITY", cx, cy - 8, { align: "center" });
  doc.text("VERIFIED", cx, cy + 10, { align: "center" });
};

export const generateCertificatePDF = (data: CertificateData) => {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();

  // Cream/ivory background
  doc.setFillColor(252, 250, 245);
  doc.rect(0, 0, w, h, "F");

  // Subtle pattern overlay - diagonal lines
  doc.setDrawColor(240, 235, 220);
  doc.setLineWidth(0.1);
  for (let i = -h; i < w + h; i += 8) {
    doc.line(i, 0, i + h, h);
  }

  // Gold ornamental border
  drawGoldBorder(doc, w, h);

  // Top decorative divider
  const divY = 36;
  doc.setDrawColor(180, 150, 80);
  doc.setLineWidth(0.5);
  doc.line(w / 2 - 60, divY, w / 2 - 10, divY);
  doc.line(w / 2 + 10, divY, w / 2 + 60, divY);
  // Diamond in center
  doc.setFillColor(180, 150, 80);
  const d = 3;
  doc.line(w / 2 - d, divY, w / 2, divY - d);
  doc.line(w / 2, divY - d, w / 2 + d, divY);
  doc.line(w / 2 + d, divY, w / 2, divY + d);
  doc.line(w / 2, divY + d, w / 2 - d, divY);

  // Academy name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(180, 150, 80);
  doc.text("TRINITY ACADEMY", w / 2, 28, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(130, 120, 100);
  doc.text("A Unit of Trinity Tech Pvt. Ltd.  |  Machapokhari, Kathmandu", w / 2, 33, { align: "center" });

  // Certificate title
  doc.setFont("times", "bold");
  doc.setFontSize(36);
  doc.setTextColor(40, 35, 30);
  doc.text("CERTIFICATE", w / 2, 54, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(130, 120, 100);
  doc.text("OF COMPLETION", w / 2, 62, { align: "center" });

  // Decorative line under title
  doc.setDrawColor(180, 150, 80);
  doc.setLineWidth(0.3);
  doc.line(w / 2 - 45, 66, w / 2 + 45, 66);

  // Body text
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 95, 85);
  doc.text("This is to certify that", w / 2, 78, { align: "center" });

  // Student name - elegant
  doc.setFont("times", "bolditalic");
  doc.setFontSize(28);
  doc.setTextColor(30, 60, 100);
  doc.text(data.name, w / 2, 92, { align: "center" });

  // Name underline
  const nameW = doc.getTextWidth(data.name);
  doc.setDrawColor(180, 150, 80);
  doc.setLineWidth(0.6);
  doc.line(w / 2 - nameW / 2 - 5, 95, w / 2 + nameW / 2 + 5, 95);
  doc.setLineWidth(0.2);
  doc.line(w / 2 - nameW / 2 - 5, 96.5, w / 2 + nameW / 2 + 5, 96.5);

  // Course description
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 95, 85);
  doc.text("has successfully completed the course", w / 2, 106, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(40, 35, 30);
  doc.text(`"${data.course}"`, w / 2, 116, { align: "center" });

  // Grade & date
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 95, 85);
  doc.text(`with Grade: ${data.grade}  |  Awarded on: ${data.date}`, w / 2, 127, { align: "center" });

  // Bottom decorative divider
  doc.setDrawColor(180, 150, 80);
  doc.setLineWidth(0.3);
  doc.line(w / 2 - 50, 135, w / 2 + 50, 135);

  // Signatures
  const sigY = 158;
  drawSignature(doc, 65, sigY, "Raj Kumar Shrestha", "Director, Trinity Academy");
  drawSignature(doc, w - 65, sigY, "Course Head", `${data.course.split(" ")[0]} Department`);

  // Official seal in center
  drawSeal(doc, w / 2, sigY - 5);

  // Footer
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.5);
  doc.setTextColor(140, 135, 125);
  doc.text(`Certificate ID: ${data.certId}`, w / 2, h - 20, { align: "center" });
  doc.text("Verify at: academy.trinitytech.com.np/verify", w / 2, h - 16, { align: "center" });

  // Social handles
  doc.setFontSize(5.5);
  doc.setTextColor(160, 155, 145);
  doc.text("@trinityacademyhq  •  Facebook  •  Instagram  •  TikTok", w / 2, h - 12, { align: "center" });

  doc.save(`Trinity_Certificate_${data.certId}.pdf`);
};
