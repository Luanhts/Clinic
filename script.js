const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let agenda = [];



const addConsulta = () => {
    readline.question("Enter your name: ", name => {
        readline.question("Enter the Doctor's name: ", nomeMed => {
            readline.question("Enter the date: ", dates => {
                readline.question("Enter the time: ", horario => {
                        const infos = {
                            name: name,
                            nomeMed: nomeMed,
                            dates: dates,
                            horario: horario
                        };
                        agenda.push(infos);
                        console.log("Sua consulta foi adicionada!!! ");
                        menu();
                });
            });
        });
    });
}



const removeConsult = () => {
    if (agenda.length <= 0) {
        console.log("Você não possui nenhuma consulta agendada: ");
        menu();
    }

    console.log("Suas consultas agendadas: ");
    agenda.forEach((consulta, index) => {
        console.log(`${index + 1} - Paciente: ${consulta.name}, Médico: ${consulta.nomeMed}, Data: ${consulta.dates}, Horário: ${consulta.horario}`);
    });

    readline.question("Digite o número da consulta que deseja remover: ", (indexRemove) => {
        const consultIndice = parseInt(indexRemove) - 1;

        if (consultIndice >= 0 && consultIndice < agenda.length) {
            agenda.splice(consultIndice, 1);
            console.log('Consulta removida com sucesso!');
            menu();
        } else {
            console.log('Índice de consulta inválido.');
        }
    });
}



const listConsultas = () => {
    if (agenda.length <= 0) {
        console.log("Você não tem nenhuma consulta agendada ");
    } else {
        console.log("Suas consultas: ");
        agenda.forEach((infos, index) => {
            console.log(`${index + 1} Name: ${infos.name}, Médico: ${infos.nomeMed}, data consulta: ${infos.dates}, horario: ${infos.horario} `);
        });
    }
    menu();
}

const alterConsulta = () => {
    if (agenda.length <= 0){
        console.log("Você não possue nenhuma consulta agendada: ")
        menu();
    }
        console.log("Aqui estão suas consultas: ")
        agenda.forEach((infos, index) => {
            console.log(`${index + 1} Name: ${infos.name}, Médico: ${infos.nomeMed}, data consulta: ${infos.dates}, horario: ${infos.horario}`)
        });

    readline.question("Digitre uma das opções: ", option =>{
        const consultaIndice = parseInt(option) - 1;

        if(consultaIndice < 0 || consultaIndice >= agenda.length || isNaN(consultaIndice)){
            console.log("Valor inválido: ")
            alterConsulta();
        }

        console.log(`
        1. Nome do paciente
        2. Médico responsável
        3. Data da consulta
        4. Horário da consulta 
        `);

        readline.question("Digite a opção a ser alterada: ", opcao => {
            switch (parseInt(opcao)){
                case 1:
                    readline.question("Digite o nome do paciente: ", novoNome => {
                        agenda[consultaIndice].name = novoNome;
                        console.log("O nome foi atualizado!!! ")
                        menu();
                });
                break;
                case 2:
                    readline.question("Digite o nome do médico: ", novoMedico =>{
                        agenda[consultaIndice].nomeMed = novoMedico;
                        console.log("O médico foi alterado... ")
                        menu();
                })
                break;
                case 3:
                    readline.question("Digite a data a ser alterada: ", novaData =>{
                        agenda[consultaIndice].dates = novaData;
                        console.log("Data atualizada!!! ")
                        menu();
                });
                break;
                case 4:
                    readline.question("Digite o novo horário: ", novoHorario => {
                        agenda[consultaIndice].horario = novoHorario;
                         console.log("O horário foi atualizado!!! ")
                            menu();
                });
                break;
                default:
                    console.log("Opção inválida: ")
                    alterConsulta();
                    break;
            }
        });
    });
}



function menu() {
    console.log("-".repeat(15));
    console.log("THE CLINIC");
    console.log("SEE THE OPTIONS");
    console.log("-".repeat(15));
    console.log("Digite [1] to add a Consulta: ");
    console.log("Digite [2] to remove a Consulta: ");
    console.log("[3] to listar as Consultas: ");
    console.log("[4] para alterar a consulta: " )
    console.log("[5] to exit");

    readline.question("Choose an option: ", option => {
        if (option > 5 || option < 1){
            console.log("Digite uma opção válida: ")
            menu();
        }else{
        switch (option) {
            case "1":
                addConsulta();
                break;
            case "2":
                    removeConsult();
                break;
            case "3":
                listConsultas();
                break;
            case "4":
                alterConsulta();
                break;
            case "5":
                readline.close();
                break;
            default:
                console.log("The option is invalid. Try again ");
                menu();
                break; 
        }
    }
})
}
menu();
