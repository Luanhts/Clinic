let agenda = [];

const addConsulta = (name, nomeMed, dates, horario) => {
    const infos = {
        name: name,
        nomeMed: nomeMed,
        dates: dates,
        horario: horario
    };
    agenda.push(infos);
    console.log("Sua consulta foi adicionada!!! ");
}

const removeConsult = (name) => {
    const indice = agenda.findIndex(infos => infos.name === name);
    
    if (indice !== -1) {
        agenda.splice(indice, 1);
        console.log("Consulta Removida ");
    } else {
        console.log("Consulta não localizada ");
    }
}

const listConsultas = () => {
    if (agenda.length === 0) {
        console.log("Você não tem nenhuma consulta agendada ");
    } else {
        console.log("Suas consultas: ");
        agenda.forEach(infos => {
            console.log(`Name: ${infos.name}, Médico: ${infos.nomeMed}, data consulta: ${infos.dates}, horario: ${infos.horario} `);
        });
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("-".repeat(15));
    console.log("THE CLINIC");
    console.log("SEE THE OPTIONS");
    console.log("-".repeat(15));
    console.log("Digite [1] to add a Consulta: ");
    console.log("Digite [2] to remove a Consulta: ");
    console.log("[3] to listar as Consultas: ");
    console.log("[4] para editar um valor: " )
    console.log("[5] to exit");

    readline.question("Choose an option: ", option => {
        switch (option) {
            case "1":
                readline.question("Enter your name: ", name => {
                    readline.question("Enter the Doctor's name: ", nomeMed => {
                        readline.question("Enter the date: ", dates => {
                            readline.question("Enter the time: ", horario => {
                                addConsulta(name, nomeMed, dates, horario);
                                menu();
                            });
                        });
                    });
                });
                break;
            case "2":
                readline.question("Enter the name of the consultation to remove: ", name => {
                    removeConsult(name);
                    menu();
                });
                break;
            case "3":
                listConsultas();
                menu();
                break;
            case "4":

            case "5":
                readline.close();
                break;
            default:
                console.log("The option is invalid. Try again ");
                menu();
                break;
        }
    })
}

menu();
