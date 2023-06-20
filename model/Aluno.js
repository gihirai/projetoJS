
class AlunoModel {
	async getAlAlunos() {
		let returns = [];
		let alunos = await prisma.$queryRaw`
			SELECT *
			FROM aluno
		`;

		if (alunos?.length) {
			for (let aluno of alunos) {
				let id = await prisma.$queryRaw`SELECT * FROM pontos WHERE aluno_id = ${aluno.id}`;
				
				returns.push({ ...aluno, id });
			}
		}

		return returns;
	}

	async createAluno(name, aluno_id) {
		let aluno = await prisma.$queryRaw`
			INSERT INTO aluno (name, aluno_id)
			VALUES (${name}, ${aluno_id})
		`;
		
		return aluno;
	}
	
	async updateAluno(id, name, email, phone) {
		let aluno = await prisma.$queryRaw`
			UPDATE aluno
			SET name = ${name}, email = ${email}, phone = ${phone}
			WHERE id = ${id}
		`;

		return aluno;
	}
	
	async deleteAluno(id) {
		let employee = await prisma.$queryRaw`
			DELETE FROM aluno
			WHERE id = ${id}
		`;

		return aluno;
	}
	
	async getAluno(id) {
		let aluno = await prisma.$queryRaw`
			SELECT *
			FROM aluno
			WHERE id = ${id}
			LIMIT 1
		`;

		if (aluno?.length) {
			let id = await prisma.$queryRaw`SELECT * FROM pontos WHERE aluno_id = ${aluno[0].id}`;

			aluno[0].id = id;
		}

		return id;
	}
}

module.exports = new AlunoModel();