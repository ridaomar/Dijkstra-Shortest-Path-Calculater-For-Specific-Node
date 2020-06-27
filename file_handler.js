var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
    //   var node = document.getElementById('output');
    //   node.innerText = text;
      
      const allLines = text.split('\n');
      allLines.forEach((line) => {
        // console.log(line);
        //   console.log('From (' + line.substring(0, 1) + ') to (' + line.substring(2, 3) + ') = ' + line.substring(4, 5));

        //   graph.push({from: line.substring(0, 1), to: line.substring(2, 3), equal: line.substring(4, 5)});
        
        graph.push([line.split(" ")[0].toUpperCase(), line.split(" ")[1].toUpperCase(), parseInt(line.split(" ")[2])])
    });
    
    // console.log(x[0].from + "  " + x[0].to  + "  " + x[0].equal );

    };
    reader.readAsText(input.files[0]);
};