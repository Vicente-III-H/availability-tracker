const MenuNames = Object.freeze({
    Start: "Start",
    Count: "Count",
    Date: "Date",
    Scheduler: "Scheduler"
});

const Menus = ((() => {
    const menuList = [];
    const indexTracker = {}

    return {
        add: (name) => {
            menuList.push(name);
            indexTracker[name] = menuList.length - 1;
        },

        first: () => {
            return menuList[0];
        },

        next: (currentMenu) => {
            return menuList[indexTracker[currentMenu] + 1];
        }
    }
})());
Menus.add(MenuNames.Start);
Menus.add(MenuNames.Count);
Menus.add(MenuNames.Date);
Menus.add(MenuNames.Scheduler);

export {
    MenuNames,
    Menus
}