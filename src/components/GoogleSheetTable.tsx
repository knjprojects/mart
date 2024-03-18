"use client"
import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

const GoogleSheetTable = () => {
    const [sheetData, setSheetData]:any = useState([]);

    useEffect(() => {
        const fetchSheetData = async () => {
            const response = await fetch('https://docs.google.com/spreadsheets/d/1_PewMBYaVYkI8GUJ0T5JjxdTij7Jfj48mQ_9dWFkKpQ/edit?usp=sharing');
            const blob = await response.blob();
            const reader = new FileReader();

            reader.onload = () => {
                const data = reader.result;
                const newdata = XLSX.read(data, { type: 'binary' })
                   .SheetNames[0]
                    .split("\n")
                   .slice(1)
                    .map(row => row.split("\t").slice(0, 12))
                    .map(row => ({ Category: row[0], Type: row[1], Brand: row[2], Color: row[3], Description: row[4], Size: row[5], Date: row[6], DateBought: row[7], MSRP: row[8], Price: row[9], PPW: row[10], TotalWears: row[11], StartingNum: row[12] }));
           //const workbook = XLSX.read(data, { type: 'binary' });
                //const sheetName = workbook.SheetNames[0];
                //const sheet = workbook.Sheets[sheetName];
                //const newdata:any = XLSX.utils.sheet_to_json(sheet, { header: ['Category', 'Type','Brand', 'Color', 'Description','Size', 'Date', 'Date Bought', 'MSRP','Price','PPW','Total Wears','Starting #'] });
                console.log(newdata)
                setSheetData(newdata);
            };


            reader.readAsBinaryString(blob);
        };

        fetchSheetData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    {sheetData.length > 0 && sheetData[0].map((header:any, index:any) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {Array.isArray(sheetData[1]) && sheetData.length > 0 && sheetData.slice(1).map((row:any, rowIndex:any) => (
                    <tr key={rowIndex}>
                        {row.map((cell:any, cellIndex:any) => (
                            <td key={cellIndex}>{cell.toString()}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GoogleSheetTable;