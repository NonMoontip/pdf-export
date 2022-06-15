PDFDocument = require('pdfkit');

function buildPDF(dataCallback, endCallback) {
    const doc = new PDFDocument();
    doc.on('data', dataCallback);
    doc.on('end', endCallback);
    doc
        .fontSize(18)
        .text('Profile');
    doc
        .fontSize(14)
        .text('My name is Nattanon Moontip. I study in Rangsit University', 100, 100)
    doc
        .fontSize(14)
        .text('address: 12/79 klongsong , klongluang , pathumthani 12120')
    doc.end();
}
module.exports = { buildPDF };