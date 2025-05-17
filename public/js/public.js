
function renderTickets(tickets = []) {

    for(let i = 0; i < tickets.length; i++) {
        if( i>= 4) break;
        const ticket = tickets[i];
        if(!ticket) continue;

        const lblTicket = document.querySelector(`#lbl-ticket-0${i+1}`);
        const lblDesk = document.querySelector(`#lbl-desk-0${i+1}`);

        lblTicket.innerText = `Ticket ${ticket.number}`;
        lblDesk.innerText = ticket.handleAtDesk;
    }
}


async function loadCurrentTickets() {
    const tickets = await fetch('/api/ticket/working-on').then(resp => resp.json());
    renderTickets(tickets);
}

loadCurrentTickets();