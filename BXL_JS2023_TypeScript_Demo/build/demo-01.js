"use strict";
// Intro a TS
class DemoService {
    constructor(prefix) {
        this.prefix = prefix;
    }
    async getMessage() {
        const response = await fetch('example.com').then(d => d.json);
        return `${this.prefix}-${response.message}`;
    }
}
