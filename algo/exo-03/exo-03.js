let resultat = document.getElementById("resultat-contenu");
let syntaxe = document.getElementById("result-syntaxe");

let a, b, c, d, e, f;
a = 10;
b = parseInt(5 / 2);
c = b + a;
d = 5 % 2;
e = 5 / 2.0;
f = (e - 0.5) * a;

let monTableau = `
<table>
            <thead>
                <tr>
                    <th>Variables</th>
                    <th>Valeur</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>a</td>
                    <td>${a}</td>
                </tr>
                <tr>
                    <td>b</td>
                    <td>${b}</td>
                </tr>
                <tr>
                    <td>c</td>
                    <td>${c}</td>
                </tr>
                <tr>
                    <td>d</td>
                    <td>${d}</td>
                </tr>
                <tr>
                    <td>e</td>
                    <td>${e}</td>
                </tr>
                <tr>
                    <td>f</td>
                    <td>${f}</td>
                </tr>
            </tbody>
        </table>
`;

resultat.innerHTML = monTableau;
syntaxe.innerText = `
let a, b, c, d, e, f;
a = 10;
b = parseInt(5 / 2);
c = b + a;
d = 5 % 2;
e = 5 / 2.0;
f = (e - 0.5) * a;
`;
