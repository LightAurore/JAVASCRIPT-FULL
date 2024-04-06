

// ma class
class DemoService {
    prefix: string;

    constructeur(prefix: string) {
        this.prefix = prefix;
    }

    async getMessage() {
        const response: any = await fetch('exemple')
                                    .then(d => d.json)
        
        return `${this.prefix} - ${response.message}`;

    }
}