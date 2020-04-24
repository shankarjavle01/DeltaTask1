const highScoresList=document.getElementById('highScoresList');
const highScores=JSON.parse(localStorage.getItem('highscore')) || [];

highScores.sort((a, b) => a.score - b.score);
highScores.splice(5);

highScoresList.innerHTML=highScores
    .map( score =>{
        return `<li class="high-score">${score.score} seconds </li>`;
})
.join("");