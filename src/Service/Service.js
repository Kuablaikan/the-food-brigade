export class Service {

    static readList(key) {
        const storageValue = localStorage.getItem(key);
        let list = [];
        if (storageValue)
            list = JSON.parse(storageValue);
        return list;
    }

    static writeList(key, list) {
        localStorage.setItem(key, JSON.stringify(list));
    }

}
