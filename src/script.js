let container = document.createElement(`div`);
    container.classList.add(`container`);
    document.body.appendChild(container);

for (let x = 0; x < 16; x++) {
    let row = document.createElement(`div`);
    row.classList.add(`row`);

    for (let y= 0; y < 16; y++) {
        let item = document.createElement(`div`);
        item.classList.add(`item`);
        row.appendChild(item);
    }

    container.appendChild(row);
}