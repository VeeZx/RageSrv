mp.events.addCommand('hp', (player) => {
    player.health = 100;
});

mp.events.addCommand('armor', (player) => {
    player.armour = 100;
});

mp.events.addCommand('kill', (player) => {
    player.health = 0;
});

mp.events.addCommand("veh",(player, fullText, model, id, color) => {
    if (!model || !id) {
        player.outputChatBox(`/veh (name) (id) (color)`);
        break;
    }
    let target = mp.players.at(id);
        if (target != undefined) {
            mp.vehicles.new(mp.joaat(model), new mp.Vector3(target.position.x + 10, target.position.y, target.position.z),
            {
                numberPlate: "SANYA",
                color: [[0, 255, 0],[0, 255, 0]]
            });
        }

        
});

mp.events.addCommand("weapon", (player, fullText, id, weapon, ammo) => {
    let weaponHash = mp.joaat("weapon_"+weapon);
    let target = mp.players.at(id);
    // пофиксить!
        player.outputChatBox(`Вы дали ${target.id} оружие ${weapon} с ${ammo} боеприпасов`);
        player.outputChatBox(`Вывод ${fullText}`);
    } else {
        player.outputChatBox(`айди иначе ${target}`);
    }
}); 

mp.events.addCommand("hello", (player, fullText, arg1, arg2) => {
    if (arg1 && arg2 != 0) {
        player.outputChatBox(`Hello! ${player.name}`);
    }
// optimize
// (arg1 && arg2 != 0) ? (player.outputChatBox(`True! ${player.name}`)) : (player.outputChatBox(`False bro ${player.name}`));
});