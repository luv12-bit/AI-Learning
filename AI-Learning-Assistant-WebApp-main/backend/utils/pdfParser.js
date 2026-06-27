import fs from "fs/promises";
import { PDFParse } from "pdf-parse";

/*
- Extract text from PDF file or buffer
@param {string|Buffer} filePathOrBuffer - path to PDF file, or a Buffer containing PDF data
@returns {Promise<{text: string, numPages: number}>}
*/

export const extractTextFromPDF = async (filePathOrBuffer) => {
    try{
        // Accept either a Buffer (from multer memoryStorage) or a file path string
        const dataBuffer = Buffer.isBuffer(filePathOrBuffer)
            ? filePathOrBuffer
            : await fs.readFile(filePathOrBuffer);

        // pdf-parse expects a Uint8Array
        const parser = new PDFParse(new Uint8Array(dataBuffer));
        const data = await parser.getText();

        return {
            text: data.text,
            numPages: data.numpages,
            info: data.info,
        };
    }
    catch(error){
        console.error("PDF parsing error: ",error);
        throw new Error("Failed to extract text from PDF");
    }
};