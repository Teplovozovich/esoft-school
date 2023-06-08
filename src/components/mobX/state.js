let store = {
    _state: {
        ratingPage: {
            fullNamaData: [
                { name: "Александров Игнат Анатолиевич" },
                { name: "Шевченко Рафаил Михайлович" },
                { name: "Мазайло Трофим Артёмович" },
                { name: "Логинов Остин Данилович" },
                { name: "Борисов Йошка Васильевич" },
                { name: "Соловьёв Ждан Михайлович" },
                { name: "Негода Михаил Эдуардович" },
                { name: "Гордеев Шамиль Леонидович" },
                { name: "Многогрешный Павел Виталиевич" },
                { name: "Александров Игнат Анатолиевич" },
                { name: "Волков Эрик Алексеевич" },
                { name: "Кузьмин Ростислав Васильевич" },
                { name: "Стрелков Филипп Борисович" },
                { name: "Галкин Феликс Платонович" }
            ],
            winsNumDate: [
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 },
                { sum: 9824 }
            ],
            lossesDate: [
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 },
                { sum: 1222 }
            ],
            allGamesDate: [
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 },
                { sum: 24534 }
            ],
            percentWinsDate: [
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' },
                { sum: '87%' }
            ],
        },
        activePlayersPage: {
            itemsActivePlayers: [
                { id: 1, name: "Александров Игнат Анатолиевич", status: "primaryButton", textLabel: "Свободен" },
                { id: 2, name: "Василенко Эрик Платонович", status: "secondaryButton", textLabel: "В игре" },
                { id: 3, name: "Быков Юрий Виталиевич", status: "primaryButton", textLabel: "Свободен" },
                { id: 4, name: "Галкин Феликс Платонович", status: "secondaryButton", textLabel: "В игре" },
                { id: 5, name: "Комаров Цефас Александрович", status: "secondaryButton", textLabel: "В игре" },
                { id: 6, name: "Шевченко Рафаил Михайлович", status: "secondaryButton", textLabel: "В игре" },
                { id: 7, name: "Гордеев Шамиль Леонидович", status: "primaryButton", textLabel: "Свободен" },
                { id: 8, name: "Бобров Фёдор Викторович", status: "primaryButton", textLabel: "Свободен" },
                { id: 9, name: "Суворов Феликс Григорьевич", status: "secondaryButton", textLabel: "В игре" },
                { id: 10, name: "Марков Йошка Фёдорович", status: "primaryButton", textLabel: "Свободен" }
            ]
        },
        gameHistoryPage: {
            itemsGameHistoryTable: [
                { id: 1, firstPlayer: "Терещенко У. Р.", firstPlayerSide: "zero", firstPlayerCup: "1", secondPlayer: "Многогрешный П. В.", secondPlayerSide: "cross", secondPlayerCup: "0", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 2, firstPlayer: "Горбачёв А. Д.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Многогрешный П. В.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 3, firstPlayer: "Константинов В. Н.", firstPlayerSide: "zero", firstPlayerCup: "1", secondPlayer: "Сасько Ц. А.", secondPlayerSide: "cross", secondPlayerCup: "0", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 4, firstPlayer: "Никифорова Б. А.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Горбачёв А. Д.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 5, firstPlayer: "Кулишенко К. И.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Вишняков Ч. М.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 6, firstPlayer: "Гриневска Д. Б.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Кудрявцев Э. В.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 7, firstPlayer: "Нестеров Х. А.", firstPlayerSide: "zero", firstPlayerCup: "1", secondPlayer: "Исаева О. А.", secondPlayerSide: "cross", secondPlayerCup: "0", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 8, firstPlayer: "Исаева О. А.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Кулишенко К. И.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 9, firstPlayer: "Коновалова В. В.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Терещенко У. Р.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 10, firstPlayer: "Казаков Х. Е.", firstPlayerSide: "zero", firstPlayerCup: "1", secondPlayer: "Овчаренко Б. М.", secondPlayerSide: "cross", secondPlayerCup: "0", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
                { id: 11, firstPlayer: "Сасько Ц. А.", firstPlayerSide: "zero", firstPlayerCup: "0", secondPlayer: "Никифорова Б. А.", secondPlayerSide: "cross", secondPlayerCup: "1", date: "12 февраля 2022", gameTimePlayed: "43 мин 13 сек" },
            ]
        },
        playersListPage: {
            itemsPlayersList: [
                { id: 1, name: "Александров Игнат Анатолиевич", age: "24", sex: "girl", status: "blocked", created: "12 октрября 2021", changed: "22 октрября 2021", isBlocked: "blocked" },
                { id: 2, name: "Мартынов Остап Фёдорович", age: "12", sex: "girl", status: "active", created: "12 октрября 2021", changed: "22 октрября 2021", isBlocked: "unblocked" },
                { id: 3, name: "Комаров Цефас Александрович", age: "83", sex: "boy", status: "active", created: "12 октрября 2021", changed: "22 октрября 2021", isBlocked: "unblocked" }
            ],
            newInputAge: ''
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    handleStatusChange(id) {
        this._state.playersListPage.itemsPlayersList = this._state.playersListPage.itemsPlayersList.map(player => {
            if (player.id === id) {
                if (player.status === "blocked") {
                    return { ...player, status: "active", isBlocked: "unblocked" };
                } else {
                    return { ...player, status: "blocked", isBlocked: "blocked" };
                }
            }
            return player;
        });
        this._state._callSubscriber(this._state);
    },
    updateNewInputAgeText(newText) {
        this._state.playersListPage.newInputAge = newText;
        this._state._callSubscriber(this._state);
    },
    handleAddButtonClick() {
        const newPlayer = {
            id: this._state.playersListPage.itemsPlayersList.length + 1,
            name: "a",
            age: this._state.playersListPage.newInputAge,
            sex: "a",
            created: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
            changed: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
            status: "active",
            isBlocked: "blocked"
        };
        this._state.playersListPage.itemsPlayersList.push(newPlayer);
        this._state._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._state._callSubscriber = observer;
    }
}

export default store;
window.store = store;