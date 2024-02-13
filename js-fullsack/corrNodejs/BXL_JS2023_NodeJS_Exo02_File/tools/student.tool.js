'use strict';
const fs = require('fs/promises');              // Module de NodeJS
const numberTool = require('./number.tool');    // Module perso
const dayjs = require('dayjs');                 // Librairie


const STUDENT_FILE = './data/students.json';

async function readStudentFile() {
    // Lecture du fichier "json" sous la forme d'une string
    const data = await fs.readFile(STUDENT_FILE, { encoding: 'utf8' });

    // Conversion des données
    return JSON.parse(data);
}

async function saveInCsvFile(name, data) {

    // Définition du nom de fichier avec la date
    const filename = `./output/${dayjs().format('YYYYMMDDhhmmss')}-${name}.csv`;

    // Import dynamique -> Car « export-to-csv » est en ES Module (Incompatible avec require !)
    const csv = await import('export-to-csv');

    // Utilisation de la lib « export-to-csv » pour générer les données en format string "csv"
    const result = csv.generateCsv({ fieldSeparator: ',', useKeysAsHeaders: true })(data);

    // Ecriture du fichier
    await fs.writeFile(filename, result, { encoding: 'utf8'});
}

const studentTool = {

    getProfs: async () => {
        const data = await readStudentFile();
        const profs = data.results.map(r => r.professor);

        console.log(profs);
        saveInCsvFile('profs', profs);
    },

    getStudents: async () => {
        const data = await readStudentFile();
        const students = data.results.map(r => r.students).flat();

        console.log(students);
        saveInCsvFile('students', students);
    },

    getSectionResults: async () => {
        const data = await readStudentFile();

        const results = [];
        for (const current of data.results) {

            const section = current.section.code;

            const studentResults = current.students.map(s => s.year_result).filter(r => r !== null);
            const average = studentResults.reduce((acc, res) => acc + res, 0) / studentResults.length;

            results.push({
                section, 
                average : numberTool.round(average, 2)
            });
        }
        
        console.log(results);
        saveInCsvFile('section-average', results);
    }
};
module.exports = studentTool;