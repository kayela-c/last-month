function parseScores(scoresString) {
    return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
    let distributionArray = [0, 0, 0, 0, 0];

    scoresArray.forEach(score => {
        let numScore = parseInt(score);
        if (numScore >= 90) distributionArray[0]++;
        else if (numScore >= 80) distributionArray[1]++;
        else if (numScore >= 70) distributionArray[2]++;
        else if (numScore >= 60) distributionArray[3]++;
        else distributionArray[4]++;
    });

    return distributionArray;
}

function setTableContent(scoresString) {
    const scoresArray = parseScores(scoresString);
    const distributionArray = buildDistributionArray(scoresArray);

    let firstRowHTML = "";
    let thirdRowHTML = "";
    for (let i = 0; i < distributionArray.length; i++) {
        const barHeight = distributionArray[i] * 10;
        firstRowHTML += `<td><div style="height:${barHeight}px" class="bar${i}"></div></td>`;
        thirdRowHTML += `<td>${distributionArray[i]}</td>`;
    }

    document.getElementById("firstRow").innerHTML = firstRowHTML;
    document.getElementById("thirdRow").innerHTML = thirdRowHTML;
}

// Example usage:
setTableContent("45 78 98 83 86 99 90 59");
