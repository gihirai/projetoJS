
class ProfessorModel {
    async getAllProfessores() {
        let professor = await prisma.$queryRaw`
            SELECT *
            FROM professor
        `;

        if (professor?.length) {
            for (let professor of professor) {
                let professores = await prisma.$queryRaw`SELECT * FROM employee WHERE employer_id = ${professor.id}`;

                professor.professores = professores;
            }
        }

        return professor;
    }

    async createProfessor(name, has_hour_base) {
        let professor = await prisma.$queryRaw`
            INSERT INTO professor (name, has_hour_base)
            VALUES (${name}, ${has_hour_base})
        `;

        return professor;
    }

    async updateProfessor(name, has_hour_base) {
        let professor = await prisma.$queryRaw`
            UPDATE professor
            SET name = ${name}, has_hour_base = ${has_hour_base}
            WHERE id = ${id}
        `;

        return professor;
    }

    async deleteProfessor(id) {
        let professor = await prisma.$queryRaw`
            DELETE FROM professor
            WHERE id = ${id}
        `;

        return professor;
    }

    async getProfessor(id) {
        let professor = await prisma.$queryRaw`
            SELECT *
            FROM professor
            WHERE id = ${id}
            LIMIT 1
        `;

        return professor;

        if (professor?.length) {
            let professores = await prisma.$queryRaw`SELECT * FROM professor WHERE professor = ${professor[0].id}`;

            professor[0].professores = professores;
        }

        return professores;
    }
}

module.exports = new ProfessorModel();