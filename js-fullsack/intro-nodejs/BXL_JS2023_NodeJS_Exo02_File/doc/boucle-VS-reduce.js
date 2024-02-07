getSectionResults: async () => {
    const data = await readStudentFile();

    const acc = [];
    for(const current of data.results) {

        const section = current.section.code;

        const studentResults = current.students.map(s => s.year_result).filter(r => r !== null);
        let total = 0;
        for(const res of studentResults) {
            total = total + res;
        }
        const average =  total / studentResults.length;

        acc.push({section, average});
    }


    const results = data.results.reduce((acc, current) => {

        const section = current.section.code;

        const studentResults = current.students.map(s => s.year_result).filter(r => r !== null);
        const average = studentResults.reduce((total, res) => total + res, 0) / studentResults.length;

        acc.push({section, average});
        return acc;
    }, []);

}