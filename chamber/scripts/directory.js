document.addEventListener('DOMContentLoaded', async () => {
    const memberList = document.getElementById('member-list');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            if (!response.ok) throw new Error('Network response was not ok');
            const members = await response.json();
            return members;
        } catch (error) {
            console.error('Error fetching members:', error);
            return [];
        }
    }
    function displayMembers(members, view) {
        memberList.innerHTML = '';
        memberList.className = view;

        members.forEach(member => {
            if (view === 'grid') {
                const card = document.createElement('div');
                card.className = 'member-card';
                card.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    <p class="membership">Membership: ${
                        member.membershipLevel === 3 ? 'Gold' :
                        member.membershipLevel === 2 ? 'Silver' : 'Member'
                    }</p>
                `;
                memberList.appendChild(card);
            } else {
                const item = document.createElement('div');
                item.className = 'member-list-item';
                item.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    <p class="membership">Membership: ${
                        member.membershipLevel === 3 ? 'Gold' :
                        member.membershipLevel === 2 ? 'Silver' : 'Member'
                    }</p>
                `;
                memberList.appendChild(item);
            }
        });
    }
    const members = await fetchMembers();
    displayMembers(members, 'grid');
    gridViewBtn.addEventListener('click', () => {
        displayMembers(members, 'grid');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
    });

    listViewBtn.addEventListener('click', () => {
        displayMembers(members, 'list');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });
});
