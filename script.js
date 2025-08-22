


function initSkillsChart() {
    const canvas = document.getElementById('skillsChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const skills = [
        { name: 'HTML/CSS', level: 95, color: '#e34c26' },
        { name: 'JavaScript', level: 90, color: '#f7df1e' },
        { name: 'React', level: 85, color: '#61dafb' },
        { name: 'TypesCript', level: 80, color: '#339933' },
    ];

    const barHeight = 30;
    const spacing = 15;
    const startX = 120;
    const maxBarWidth = canvas.width - 150;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    skills.forEach((skill, index) => {
        const y = 50 + (barHeight + spacing) * index;
        const barWidth = (skill.level / 100) * maxBarWidth;

        ctx.fillStyle = '#e0e0e0';
        ctx.fillRect(startX, y, maxBarWidth, barHeight);

        ctx.fillStyle = skill.color;
        ctx.fillRect(startX, y, barWidth, barHeight);

        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(skill.name, startX - 10, y + barHeight / 2 + 5);

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        if (barWidth > 40) {
            ctx.fillText(`${skill.level}%`, startX + barWidth / 2, y + barHeight / 2 + 4);
        }
    });

    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
}
