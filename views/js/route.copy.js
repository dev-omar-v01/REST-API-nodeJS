const copyButtons = document.querySelectorAll('.main__div_class button');

copyButtons.forEach((copyButton, index) => {
    copyButton.addEventListener('click', () => {
        const h2Elements = document.querySelectorAll('.main__div_class h2');
        const fullText = h2Elements[index].textContent;
        const url = fullText.replace(/^(GET:|POST:|PUT:|DELETE:)\s*/i, ''); // Remove method prefix

        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = url.trim(); // Trim any extra spaces

        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999);
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        alert('Copied to clipboard: ' + url.trim());
    });
});

