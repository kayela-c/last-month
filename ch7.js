function parseScores(scores) {
    return scores.split(" ");
}

function buildDistributionArray(scoresArray) {
    let distribution = [0, 0, 0, 0, 0];

    for (let score of scoresArray) {
        if (score >= 90) {
            distribution[0]++;
        } else if (score >= 80) {
            distribution[1]++;
        } else if (score >= 70) {
            distribution[2]++;
        } else if (score >= 60) {
            distribution[3]++;
        } else {
            distribution[4]++;
        }
    }

    return distribution;
}

function setTableContent(scores) {
    const scoresArray = parseScores(scores);
    const distributionArray = buildDistributionArray(scoresArray);
    let firstRowHTML = "";

    for (let i = 0; i < distributionArray.length; i++) {
        firstRowHTML += `<td><div style="height:${distributionArray[i] * 10}px" class="bar${i}"></div></td>`;
    }

    document.getElementById("firstRow").innerHTML = firstRowHTML;
    document.getElementById("thirdRow").innerHTML = distributionArray.map((count) => `<td>${count}</td>`).join("");
}

// Example usage:
setTableContent("45 78 98 83 86 99 90 59");