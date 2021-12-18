<template>
    <div>{{currentSkill}}</div>
</template>
<script>
export default {
    data: () => ({
        currentSkill: 'IT',
        skills: [
            'JavaScript',
            'NodeJS',
            'Babel',
            'TypeScript',
            'Angular',
            'Vue',
            'React',
            'Bootstrap',
            'Redux',
            'PHP',
            'Laravel',
            'Python',
            'Pandas',
            'C#',
            'Entity Framework',
            'ASP.NET',
            '.NET',
            'C++',
            'Boost',
            'C',
            'Rust',
            'Go',
            'SQLite',
            'PostgresQL',
            'SQL Server',
            'MySQL',
            'MariaDB',
            'Neo4j',
            'R',
            'Protobufs',
            'gRPC',
            'Java',
            'Spring',
            'Hibernate',
            'Powershell',
            'Bash',
            'SaaS',
            'Cloud',
            'IaaS',
            'Linux',
            'Windows',
            'DevOps',
            'QA',
            'MVC',
            'DDD',
            'TDD',
            'AOP',
            'OOP',
            'SOLID',
            'microservice',
            'Agile'
        ]
    }),
    async mounted() {
        const typeSeconds = 0.1;
        const cursorSeconds = 0.5;
        const randomSortedSkills = this.randomSortedSkills;
        let skillIndex = 0;
        let counter = async () => {
            let currentSkill = this.currentSkill;

            await this.delay(cursorSeconds);
            this.currentSkill = currentSkill + '_';
            await this.delay(cursorSeconds);
            this.currentSkill = currentSkill;
            await this.delay(cursorSeconds);
            this.currentSkill = currentSkill + '_';
            await this.delay(cursorSeconds);
            this.currentSkill = currentSkill;
            await this.delay(cursorSeconds);
            this.currentSkill = currentSkill + '_';
            await this.delay(cursorSeconds);

            let oldSkill = currentSkill;
            currentSkill = randomSortedSkills[skillIndex++];

            if (skillIndex >= randomSortedSkills.length) {
                skillIndex = 0;
            }

            for (let i = 1; i <= oldSkill.length; ++i) {
                this.currentSkill = oldSkill.slice(0, -i) + '_';
                await this.delay(typeSeconds);
            }

            await this.delay(cursorSeconds);
            this.currentSkill = '';
            await this.delay(cursorSeconds);

            for (let i = 1; i <= currentSkill.length; ++i) {
                this.currentSkill = currentSkill.slice(0, i) + '_';
                await this.delay(typeSeconds);
            }

            this.currentSkill = currentSkill;

            await counter();
        };

        await counter();
    },
    computed: {
        randomSortedSkills() {
            return this.skills.sort(() => (Math.random() > 0.5) ? 1 : -1);
        }
    },
    methods: {
        delay(delaySeconds) {
            return new Promise(resolve => {
                setTimeout(resolve, delaySeconds * 1000);
            });
        }
    }
};
</script>
