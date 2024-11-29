function Computer(processore,disco,ram){
    this.processore = processore;
    this.disco = disco;
    this.ram = ram;
}

Computer.prototype.infoComputerConsole = function(){
     console.log("Processore: " + this.processore + "Disco: " + this.disco + "Ram: " + this.ram);
}

Computer.prototype.infoComputerDOM= function(id){
    document.getElementById(id).innerHTML = `
    <p>Processore: ${this.processore}</p>
    <p>Disco: ${this.disco}</p>
    <p>Ram: ${this.ram}</p>
    `;
}

const mioPC = new Computer("i7","6TB","16 GB");
mioPC.infoComputerConsole();
mioPC.infoComputerDOM("miopc");