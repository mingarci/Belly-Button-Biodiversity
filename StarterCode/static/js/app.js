d3.csv("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", function(data) {
    console.log(data);
});

// * Use the D3 library to read in `samples.json`.
d3.json("samples.json").then((data => {

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// * Use `sample_values` as the values for the bar chart.
    const samples = data.samples
    const metadata = data.metadata
    const filtered = metadata.filter(bacteriaInfo => bacteriaInfo.id = patientID)[0]

    const filteredSample = samples.filter(bacteriaInfo => bacteriaInfo.id = patientID)[0]

 // * Use `sample_values` as the values for the bar chart.

    const sample_values = filteredSample.sample_values

// * Use `otu_ids` as the labels for the bar chart.
    const otu_ids = filteredSample.otu_ids


// * Use `otu_labels` as the hovertext for the chart.





}