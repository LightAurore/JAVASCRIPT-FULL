'use strict'


const PaysCode = [
    {
        nom: "Andorre",
        code: "AD"
    },
    {
        nom: "Emirats arabes unis",
        code: "AE"
    },
    {
        nom: "Afghanistan",
        code: "AF"
    },
    {
        nom: "Antigua-et-Barbuda",
        code: "AG"
    },
    
    {
        nom: "Albanie",
        code: "AL"
    },
    {
        nom: "ArmÈnie",
        code: "AM"
    },
    {
        nom: "Angola",
        code: "AO"
    },
    {
        nom: "Argentine",
        code: "AR"
    },
    {
        nom: "AT ",
        code: "Autriche"
    },
    {
        nom: "AU ",
        code: "Australie "
    },
    {
        nom: "AZ ",
        code: "AzerbaÔdjan"
    },
    {
        nom: "BA ",
        code: "Bosnie-HerzÈgovine"
    },
    {
        nom: "BB ",
        code: "Barbade"
    },
    {
        nom: "BD ",
        code: "Bangladesh"
    },
    {
        nom: "BE ",
        code: "Belgique"
    },
    {
        nom: "BF ",
        code: "Burkina"
    },
    {
        nom: "BG ",
        code: "Bulgarie"
    },
    {
        nom: "BH ",
        code: "BahreÔn"
    },
    {
        nom: "BI ",
        code: "Burundi"
    },
    {
        nom: "BJ ",
        code: "BÈnin"
    },
    {
        nom: "BN ",
        code: "Brunei"
    },
    {
        nom: "BO ",
        code: "Bolivie"
    },
    {
        nom: "BR ",
        code: "BrÈsil"
    },
    {
        nom: "BS ",
        code: "Bahamas"
    },
    {
        nom: "BT ",
        code: "Bhoutan"
    },
    {
        nom: "BW ",
        code: "Botswana"
    },
    {
        nom: "BY ",
        code: "BiÈlorussie"
    },
    {
        nom: "BZ ",
        code: "Belize"
    },
    {
        nom: "CA ",
        code: "Canada"
    },
    {
        nom: "CD ",
        code: "Congo"
    },
    {
        nom: "CF ",
        code: "Centrafricaine"
    },
    {
        nom: "CG ",
        code: "Congo"
    },
    {
        nom: "CH ",
        code: "Suisse"
    },
    {
        nom: "CI ",
        code: "CÙte d'Ivoire"
    },
    {
        nom: "CL ",
        code: "Chili"
    },
    {
        nom: "CM ",
        code: "Cameroun"
    },
    {
        nom: "CN ",
        code: "Chine"
    },
    {
        nom: "CO ",
        code: "Colombie"
    },
    {
        nom: "CR ",
        code: "Costa Rica"
    },
    {
        nom: "CS ",
        code: "Serbie-et-MontÈnÈgro"
    },
    {
        nom: "CU ",
        code: "Cuba"
    },
    {
        nom: "CV ",
        code: "Cap-Vert"
    },
    {
        nom: "CY ",
        code: "Chypre"
    },
    {
        nom: "CZ ",
        code: "TchËque"
    },
    {
        nom: "DE ",
        code: "Allemagne"
    },
    {
        nom: "DJ ",
        code: "Djibouti"
    },
    {
        nom: "DK ",
        code: "Danemark"
    },
    {
        nom: "DM ",
        code: "Dominique"
    },
    {
        nom: "DO ",
        code: "Dominicaine"
    },
    {
        nom: "DZ ",
        code: "AlgÈrie"
    },
    {
        nom: "EC ",
        code: "Equateur"
    },
    {
        nom: "EE ",
        code: "Estonie"
    },
    {
        nom: "EG ",
        code: "Egypte"
    },
    {
        nom: "ER ",
        code: "ErythrÈe"
    },
    {
        nom: "ES ",
        code: "Espagne"
    },
    {
        nom: "ET ",
        code: "Ethiopie"
    },
    {
        nom: "FI ",
        code: "Finlande"
    },
    {
        nom: "FJ ",
        code: "Fidji"
    },
    {
        nom: "FM ",
        code: "MicronÈsie"
    },
    {
        nom: "FR ",
        code: "France"
    },
    {
        nom: "GA ",
        code: "Gabon"
    },
    {
        nom: "GB ",
        code: "Royaume-Uni"
    },
    {
        nom: "GD ",
        code: "Grenade"
    },
    {
        nom: "GE ",
        code: "GÈorgie"
    },
    {
        nom: "GH ",
        code: "Ghana"
    },
    {
        nom: "GM ",
        code: "Gambie"
    },
    {
        nom: "GN ",
        code: "GuinÈe"
    },
    {
        nom: "GQ ",
        code: "GuinÈe Èquatoriale"
    },
    {
        nom: "GR ",
        code: "GrËce"
    },
    {
        nom: "GT ",
        code: "Guatemala"
    },
    {
        nom: "GW ",
        code: "GuinÈe-Bissau"
    },
    {
        nom: "GY ",
        code: "Guyana"
    },
    {
        nom: "HN ",
        code: "Honduras"
    },
    {
        nom: "HR ",
        code: "Croatie"
    },
    {
        nom: "HT ",
        code: "Haïti"
    },
    {
        nom: "HU ",
        code: "Hongrie"
    },
    {
        nom: "ID ",
        code: "IndonÈsie"
    },
    {
        nom: "IE ",
        code: "Irlande"
    },
    {
        nom: "IL ",
        code: "Israël"
    },
    {
        nom: "IN ",
        code: "Inde"
    },
    {
        nom: "IQ ",
        code: "Irak"
    },
    {
        nom: "IR ",
        code: "Iran"
    },
    {
        nom: "IS ",
        code: "Islande"
    },
    {
        nom: "IT ",
        code: "Italie"
    },
    {
        nom: "JM ",
        code: "JamaÔque"
    },
    {
        nom: "JO ",
        code: "Jordanie"
    },
    {
        nom: "JP ",
        code: "Japon"
    },
    {
        nom: "KE ",
        code: "Kenya"
    },
    {
        nom: "KG ",
        code: "Kirghizstan"
    },
    {
        nom: "KH ",
        code: "Cambodge"
    },
    {
        nom: "KI ",
        code: "Kiribati"
    },
    {
        nom: "KM ",
        code: "Comores"
    },
    {
        nom: "KN ",
        code: "Saint-Christophe-et-NiÈvËs"
    },
    {
        nom: "KP ",
        code: "CorÈe du Nord"
    },
    {
        nom: "KR ",
        code: "CorÈe du Sud"
    },
    {
        nom: "KW ",
        code: "KoweÔt"
    },
    {
        nom: "KZ ",
        code: "Kazakhstan"
    },
    {
        nom: "LA ",
        code: "Laos"
    },
    {
        nom: "LB ",
        code: "Liban"
    },
    {
        nom: "LC ",
        code: "Sainte-Lucie"
    },
    {
        nom: "LI ",
        code: "Liechtenstein"
    },
    {
        nom: "LK ",
        code: "Sri Lanka"
    },
    {
        nom: "LR ",
        code: "Liberia"
    },
    {
        nom: "LS ",
        code: "Lesotho"
    },
    {
        nom: "LT ",
        code: "Lituanie"
    },
    {
        nom: "LU ",
        code: "Luxembourg"
    },
    {
        nom: "LV ",
        code: "Lettonie"
    },
    {
        nom: "LY ",
        code: "Libye"
    },
    {
        nom: "MA ",
        code: "Maroc"
    },
    {
        nom: "MC ",
        code: "Monaco"
    },
    {
        nom: "MD ",
        code: "Moldavie"
    },
    {
        nom: "MG ",
        code: "Madagascar"
    },
    {
        nom: "MH ",
        code: "Marshall"
    },
    {
        nom: "MK ",
        code: "MacÈdoine"
    },
    {
        nom: "ML ",
        code: "Mali "
    },
    {
        nom: "MM ",
        code: "Birmanie"
    },
    {
        nom: "MN ",
        code: "Mongolie"
    },
    {
        nom: "MR ",
        code: "Mauritanie"
    },
    {
        nom: "MT ",
        code: "Malte"
    },
    {
        nom: "MU ",
        code: "Maurice"
    },
    {
        nom: "MV ",
        code: "Maldives"
    },
    {
        nom: "MW ",
        code: "Malawi "
    },
    {
        nom: "MX ",
        code: "Mexique "
    },
    {
        nom: "MY ",
        code: "Malaisie"
    },
    {
        nom: "MZ ",
        code: "Mozambique "
    },
    {
        nom: "NA ",
        code: "Namibie"
    },
    {
        nom: "NE ",
        code: "Niger "
    },
    {
        nom: "NG ",
        code: "Nigeria "
    },
    {
        nom: "NI ",
        code: "Nicaragua "
    },
    {
        nom: "NL ",
        code: "Pays-Bas"
    },
    {
        nom: "NO ",
        code: "NorvËge"
    },
    {
        nom: "NP ",
        code: "NÈpal "
    },
    {
        nom: "NR ",
        code: "Nauru"
    },
    {
        nom: "NZ ",
        code: "Nouvelle-ZÈlande"
    },
    {
        nom: "OM ",
        code: "Oman"
    },
    {
        nom: "PA ",
        code: "Panama "
    },
    {
        nom: "PE ",
        code: "PÈrou "
    },
    {
        nom: "PG ",
        code: "Papouasie-Nouvelle-GuinÈe"
    },
    {
        nom: "PH ",
        code: "Philippines"
    },
    {
        nom: "PK ",
        code: "Pakistan "
    },
    {
        nom: "PL ",
        code: "Pologne"
    },
    {
        nom: "PT ",
        code: "Portugal "
    },
    {
        nom: "PW ",
        code: "Palaos"
    },
    {
        nom: "PY ",
        code: "Paraguay "
    },
    {
        nom: "QA ",
        code: "Qatar "
    },
    {
        nom: "RO ",
        code: "Roumanie"
    },
    {
        nom: "RU ",
        code: "Russie"
    },
    {
        nom: "RW ",
        code: "Rwanda "
    },
    {
        nom: "SA ",
        code: "Arabie saoudite"
    },
    {
        nom: "SB ",
        code: "Salomon"
    },
    {
        nom: "SC ",
        code: "Seychelles"
    },
    {
        nom: "SD ",
        code: "Soudan "
    },
    {
        nom: "SE ",
        code: "SuËde"
    },
    {
        nom: "SG ",
        code: "Singapour"
    },
    {
        nom: "SI ",
        code: "SlovÈnie"
    },
    {
        nom: "SK ",
        code: "Slovaquie"
    },
    {
        nom: "SL ",
        code: "Sierra Leone"
    },
    {
        nom: "SM ",
        code: "Saint-Marin"
    },
    {
        nom: "SN ",
        code: "SÈnÈgal "
    },
    {
        nom: "SO ",
        code: "Somalie"
    },
    {
        nom: "SR ",
        code: "Suriname "
    },
    {
        nom: "ST ",
        code: "Sao TomÈ-et-Principe"
    },
    {
        nom: "SV ",
        code: "Salvador "
    },
    {
        nom: "SY ",
        code: "Syrie"
    },
    {
        nom: "SZ ",
        code: "Swaziland "
    },
    {
        nom: "TD ",
        code: "Tchad "
    },
    {
        nom: "TG ",
        code: "Togo "
    },
    {
        nom: "TH ",
        code: "ThaÔlande"
    },
    {
        nom: "TJ ",
        code: "Tadjikistan "
    },
    {
        nom: "TL ",
        code: "Timor oriental "
    },
    {
        nom: "TM ",
        code: "TurkmÈnistan "
    },
    {
        nom: "TN ",
        code: "Tunisie"
    },
    {
        nom: "TO ",
        code: "Tonga"
    },
    {
        nom: "TR ",
        code: "Turquie"
    },
    {
        nom: "TT ",
        code: "TrinitÈ-et-Tobago"
    },
    {
        nom: "TV ",
        code: "Tuvalu"
    },
    {
        nom: "TZ ",
        code: "Tanzanie"
    },
    {
        nom: "UA ",
        code: "Ukraine"
    },
    {
        nom: "UG ",
        code: "Ouganda"
    },
    {
        nom: "US ",
        code: "Etats-Unis"
    },
    {
        nom: "UY ",
        code: "Uruguay"
    },
    {
        nom: "UZ ",
        code: "OuzbÈkistan"
    },
    {
        nom: "VA ",
        code: "Saint-SiËge , ou le Vatican"
    },
    {
        nom: "VC ",
        code: "Saint-Vincent-et-les Grenadines"
    },
    {
        nom: "VE ",
        code: "Venezuela "
    },
    {
        nom: "VN ",
        code: "ViÍt Nam "
    },
    {
        nom: "VU ",
        code: "Vanuatu "
    },
    {
        nom: "WS ",
        code: "Samoa"
    },
    {
        nom: "YE ",
        code: "YÈmen "
    },
    {
        nom: "ZA ",
        code: "Afrique du Sud"
    },
    {
        nom: "ZM ",
        code: "Zambie"
    },
    {
        nom: "ZW ",
        code: "Zimbabwe "
    }
];

console.log(PaysCode.length);

