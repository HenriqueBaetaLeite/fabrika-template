export default function ExportCsv(data) {
  let dataCSV = [];

  //covert json array into csv format
  let headers = Object.keys(data[0]);
  dataCSV.push(headers.join(","));

  for (let index of data) {
    let values = headers.map((header) => {
      let escaped = ("" + index[header]).replace(/"/g, '\\"');
      return `"${escaped}"`;
    });
    dataCSV.push(values.join(","));
  }

  dataCSV = dataCSV.join("\n");

  //download csv file
  let a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";

  let blob = new Blob([dataCSV], { type: "text/csv" });
  let blobURL = window.URL.createObjectURL(blob);

  a.href = blobURL;
  a.download = "export.csv";
  a.click();
  window.URL.revokeObjectURL(blobURL);
  a.remove();
}
