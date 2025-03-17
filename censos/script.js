let myChart;

async function loadProfile() {
    const nome = document.getElementById("username").value;
    if (!nome) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "VOCE PRECISA DIGITAR UM NOME!!!",
        });
        return;
    }
    const reposta = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome.toUpperCase()}`)
    const dados = await reposta.json();
    const res = dados[0].res

    // const periodo = []
    // const frequencia = []
    // for (let i = 0; i < res.length; i++) {
    //     periodo.push(res[i].periodo);
    //     frequencia.push(res[i].frequencia);
    // }


    const periodo = res.map((item, index) => {
        if (index === 0) {
            return item.periodo.replace(/[^0-9]/g, "").substring(0, 4)
        } else {
            return item.periodo.replace(/[^0-9]/g, "").substring(4, 9)
        }
    })

    const frequencia = res.map((item) => item.frequencia)

    const ctx = document.getElementById('chart');
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: periodo,
            datasets: [{
                label: nome.toUpperCase(),
                data: frequencia,
                borderWidth: 1,
                borderColor: '#777777',
                backgroundColor: '#777777',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            }
        }
    });
}