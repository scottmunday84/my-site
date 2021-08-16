<template>
    <span>
        <div class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div>IT</div>
                </div>
                <div class="carousel-item" v-for="skill in randomSortedSkills">
                    <div>{{skill}}</div>
                </div>
            </div>
        </div>
    </span>
</template>
<script>
export default {
    mounted() {
        $('.carousel').carousel();
    },
    data: () => ({
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
    computed: {
        randomSortedSkills() {
            return this.skills.sort(() => (Math.random() > 0.5) ? 1 : -1);
        }
    }
};
</script>
