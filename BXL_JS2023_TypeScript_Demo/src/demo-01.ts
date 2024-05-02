// Intro a TS
class DemoService {
    prefix: string;

    constructor(prefix: string) {
        this.prefix = prefix;
    }

    async getMessage() {
        const response : any = await fetch('example.com').then(d => d.json)
        return `${this.prefix}-${response.message}`;
    }
}