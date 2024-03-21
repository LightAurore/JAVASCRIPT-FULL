# Mot

```

    → motId           <-> String
    → mot           <-> String
    → genre?         <-> String (forme feminin)  ↘ table externe (reusable)
    → nombre?        <-> String (forme pluriel) 

    → sens          <-> [String]  ↘ courant, par région, par défaut  ↘  sous object (tableau)

    → classe        <-> String  ↘  table externe (reusable)
    → synonymes?     <-> [Mot.string]  ↘ 
    → contraire?     <-> [Mot.string]  ↘ 

    → exemple = citation, expression  <-> String   ↘ table externe (reusable)
    → Proverbe      <-> String  ↘ table externe (reusable)
```

# Genre
```
→ Id
→ genre 
```

# Classe
```
→ Id
→ classe 
```


# Proverbes
```
→ proverbeId
→ proverbe 
→ auteur {
    Id
    pseudo
    prenom
    nom
}
→ origine
→ date
→ 
→ 
→ 
```


# Citations
```
→ citationId
→ citatation
→ auteur {
    Id
    pseudo
    prenom
    nom
}
→ date
→ context

```

# Citations
```
→ citationId
→ citatation
→ auteur {
    Id
    pseudo
    prenom
    nom
}
→ date
→ context

```