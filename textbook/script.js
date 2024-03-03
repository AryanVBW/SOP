// Replace "path/to/your/files" with the actual path to your directory
const filePath = "path/to/your/files";

const fileList = document.getElementById("fileList");

fetch(filePath)
  .then(response => response.json()) // Assuming the server provides a JSON response with file information
  .then(data => {
    data.forEach(file => {
      const listItem = document.createElement("li");
      listItem.classList.add("file-item");

      const fileName = document.createElement("span");
      fileName.classList.add("file-name");
      fileName.textContent = file.name;

      const downloadButton = document.createElement("button");
      downloadButton.classList.add("download-button");
      downloadButton.textContent = "Download";

      // Simulate download with an alert for demonstration purposes
      // Replace this with actual download logic using server-side scripting
      downloadButton.addEventListener("click", () => {
        alert(`Downloading ${file.name}`);
      });

      listItem.appendChild(fileName);
      listItem.appendChild(downloadButton);
      fileList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("Error fetching files:", error);
  });
