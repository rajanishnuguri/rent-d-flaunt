import './ActionCard.css';
import React, { useState, useEffect } from 'react';
let result = [];
const relativePath = "https://ik.imagekit.io/rajanishnuguri/";
const catalogFile = relativePath + "catalogue.csv";

export default function ActionCard() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchFile = async () => {
        try {
        const response = await  fetch(catalogFile);
        if (!response.ok) {
            throw new Error('Failed to load file');
          }
        const text = await response.text();
        setIsLoading(false);
        const rows = text.split('\n');
        result = [];

                for (let i = 0; i < rows.length; i++) {

                    const columns = rows[i].split("\t");
                    if(columns.length===3)
                    result.push(columns);
                }
            }
        catch (error) {
            console.error('Error loading file:', error);
          }
        };
    
        fetchFile();
    
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; 
    }
    return (
        <div className="card">
            <div className="row">{
                result.map((array, rowIndex) => {
                    return <div key={rowIndex} className="column">
                        <img crossOrigin="anonymous" src={relativePath  + array[2]} alt="pic" />
                    </div>;
                })
            }
            </div>
        </div>
    );
}