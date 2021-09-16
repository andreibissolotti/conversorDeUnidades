function on(element){
    element.classList.remove("off")
  }
  function off(element){
    element.classList.add("off")
  }
  
  function converterTemperatura() {
    let entrada = document.querySelector('#deTemp').value
    let saida = document.querySelector('#paraTemp').value
    let valIn = parseFloat(document.querySelector('#valIn').value)
    let result
  
    switch (entrada) {
      case "f":
        switch (saida) {
          case "f":
            result = valIn
            break;
          case "c":
            result = (valIn - 32)*(5/9) 
            break;
          case "k":
            result = ((valIn - 32)*(5/9)) + 273.15
            break;
        }
        break;
      case "c":
        switch (saida) {
          case "f":
            result = (valIn*(9/5))+32
            break;
          case "c":
            result = valIn
            break;
          case "k":
            result = valIn + 273.15
            break;
        }
        break;
      case "k":
        switch (saida) {
          case "f":
            result = ((valIn - 273.15)*(9/5))+32
            break;
          case "c":
            result = valIn - 273.15
            break;
          case "k":
            result = valIn
            break;
        }
        break;
    }
    
    let resultHTML = document.querySelector('#result')
    resultHTML.value = result.toPrecision(3)
  }
  function converterTempo() {
    let entrada = document.querySelector('#deTime').value
    let saida = document.querySelector('#paraTime').value
    let valIn = parseFloat(document.querySelector('#valIn').value)
    let result
  
    switch (entrada) {
      case "s":
        switch (saida) {
          case "s":
            result = valIn
            break;
          case "m":
            result = valIn/60 
            break;
          case "h":
            result = valIn/3600
            break;
          case "d":
            result = valIn/86400
            break
          case "w":
            result = valIn/604800
            break
        }
        break;
      case "m":
        switch (saida) {
          case "s":
            result = valIn*60
            break;
          case "m":
            result = valIn 
            break;
          case "h":
            result = valIn/60
            break;
          case "d":
            result = valIn/1440
            break
          case "w":
            result = valIn/10080
            break
        }
        break;
      case "h":
        switch (saida) {
          case "s":
            result = valIn*3600
            break;
          case "m":
            result = valIn*60
            break;
          case "h":
            result = valIn
            break;
          case "d":
            result = valIn/24
            break
          case "w":
            result = valIn/168
            break
        }
        break;
      case "d":
        switch (saida) {
          case "s":
            result = valIn*86400
            break;
          case "m":
            result = valIn*1440
            break;
          case "h":
            result = valIn*24
            break;
          case "d":
            result = valIn
            break
          case "w":
            result = valIn/7
            break
        }
        break
      case "w":
        switch (saida) {
          case "s":
            result = valIn*604800
            break;
          case "m":
            result = valIn*10080
            break;
          case "h":
            result = valIn*168
            break;
          case "d":
            result = valIn*7
            break
          case "w":
            result = valIn
            break
        }
        break
    }
    
    let resultHTML = document.querySelector('#result')
    resultHTML.value = result.toPrecision(3)
  }
  function converterComprimento() {
    let entrada = document.querySelector('#deDist').value
    let saida = document.querySelector('#paraDist').value
    let valIn = parseFloat(document.querySelector('#valIn').value)
    let result
  
    switch (entrada) {
      case "mm":
        switch (saida) {
          case "mm":
            result = valIn
            break;
          case "cm":
            result = valIn/10 
            break;
          case "m":
            result = valIn/1000
            break;
          case "km":
            result = valIn/1000000
            break
          case "an":
            result = (valIn/1000000)/9461000000000
            break
          case "pol":
            result = valIn/25.4
            break
          case "pe":
            result = valIn/305
            break
        }
        break;
      case "cm":
        switch (saida) {
          case "mm":
            result = valIn*10
            break;
          case "cm":
            result = valIn 
            break;
          case "m":
            result = valIn/100
            break;
          case "km":
            result = valIn/100000
            break
          case "an":
            result = (valIn/100000)/9461000000000
            break
          case "pol":
            result = valIn/2.54
            break
          case "pe":
            result = valIn/30.48
            break
        }
        break;
      case "m":
        switch (saida) {
          case "mm":
            result = valIn*1000
            break;
          case "cm":
            result = valIn*100
            break;
          case "m":
            result = valIn
            break;
          case "km":
            result = valIn/1000
            break
          case "an":
            result = (valIn/1000)/9461000000000
            break
          case "pol":
            result = valIn*39.37
            break
          case "pe":
            result = valIn*3.281
            break
        }
        break;
      case "km":
        switch (saida) {
          case "mm":
            result = valIn*1000000
            break;
          case "cm":
            result = valIn*100000
            break;
          case "m":
            result = valIn*1000
            break;
          case "km":
            result = valIn
            break
          case "an":
            result = valIn/9461000000000
            break
          case "pol":
            result = valIn*39370
            break
          case "pe":
            result = valIn*3281
            break
        }
        break
      case "an":
        switch (saida) {
          case "mm":
            result = (valIn*9461000000000)*1000000
            break;
          case "cm":
            result = (valIn*9461000000000)*100000
            break;
          case "m":
            result = (valIn*9461000000000)*1000
            break;
          case "km":
            result = valIn*9461000000000
            break
          case "an":
            result = valIn
            break
          case "pol":
            result = (valIn*9461000000000)*39370
            break
          case "pe":
            result = (valIn*9461000000000)*3281
            break
        }
        break
      case "pol":
        switch (saida) {
          case "mm":
            result = valIn*25.4
            break;
          case "cm":
            result = valIn*2.54
            break;
          case "m":
            result = valIn/39.37
            break;
          case "km":
            result = valIn/39370
            break
          case "an":
            result = (valIn/39370)/9461000000000
            break
          case "pol":
            result = valIn
            break
          case "pe":
            result = valIn*12
            break
        }
        break
      case "pe":
        switch (saida) {
          case "mm":
            result = valIn*304.8
            break;
          case "cm":
            result = valIn*30.48
            break;
          case "m":
            result = valIn/3.281
            break;
          case "km":
            result = valIn/3281
            break
          case "an":
            result = (valIn/3281)/9461000000000
            break
          case "pol":
            result = valIn/12
            break
          case "pe":
            result = valIn
            break
        }
        break
    }
    
    let resultHTML = document.querySelector('#result')
    resultHTML.value = result.toPrecision(3)
  }
  function converterMassa() {
    let entrada = document.querySelector('#deMas').value
    let saida = document.querySelector('#paraMas').value
    let valIn = parseFloat(document.querySelector('#valIn').value)
    let result
  
    switch (entrada) {
      case "t":
        switch (saida) {
          case "t":
            result = valIn
            break;
          case "kg":
            result = valIn*1000 
            break;
          case "g":
            result = valIn*1000000
            break;
          case "mg":
            result = valIn*1000000000
            break
          case "s":
            result = valIn*157
            break
          case "lb":
            result = valIn*2205
            break
          case "on":
            result = valIn*35274
            break
        }
        break;
      case "kg":
        switch (saida) {
          case "t":
            result = valIn/1000
            break;
          case "kg":
            result = valIn 
            break;
          case "g":
            result = valIn*1000
            break;
          case "mg":
            result = valIn*1000000
            break
          case "s":
            result = valIn*6.35
            break
          case "lb":
            result = valIn*2.205
            break
          case "on":
            result = valIn*35.274
            break
        }
        break;
      case "g":
        switch (saida) {
          case "t":
            result = valIn/1000000
            break;
          case "kg":
            result = valIn/1000
            break;
          case "g":
            result = valIn
            break;
          case "mg":
            result = valIn*1000
            break
          case "s":
            result = valIn/6350
            break
          case "lb":
            result = valIn/454
            break
          case "on":
            result = valIn/28.35
            break
        }
        break;
      case "mg":
        switch (saida) {
          case "t":
            result = valIn/1000000000
            break;
          case "kg":
            result = valIn/1000000
            break;
          case "g":
            result = valIn/1000
            break;
          case "mg":
            result = valIn
            break
          case "s":
            result = valIn/6350000
            break
          case "lb":
            result = valIn/453592
            break
          case "on":
            result = valIn/28350
            break
        }
        break
      case "s":
        switch (saida) {
          case "t":
            result = (valIn*6350000)/1000000000
            break;
          case "kg":
            result = (valIn*6350000)/1000000
            break;
          case "g":
            result = (valIn*6350000)/1000
            break;
          case "mg":
            result = valIn*6350000
            break
          case "s":
            result = valIn
            break
          case "lb":
            result = valIn*14
            break
          case "on":
            result = valIn*224
            break
        }
        break
      case "lb":
        switch (saida) {
          case "t":
            result = (valIn*453592)/1000000000
            break;
          case "kg":
            result = (valIn*453592)/1000000
            break;
          case "g":
            result = (valIn*453592)/1000
            break;
          case "mg":
            result = valIn*453592
            break
          case "s":
            result = valIn/14
            break
          case "lb":
            result = valIn
            break
          case "on":
            result = valIn*16
            break
        }
        break
      case "on":
        switch (saida) {
          case "t":
            result = (valIn*28350)/1000000000
            break;
          case "kg":
            result = (valIn*28350)/1000000
            break;
          case "g":
            result = (valIn*28350)/1000
            break;
          case "mg":
            result = valIn*28350
            break
          case "s":
            result = valIn/224
            break
          case "lb":
            result = valIn/16
            break
          case "on":
            result = valIn
            break
        }
        break
    }
    
    let resultHTML = document.querySelector('#result')
    resultHTML.value = result.toPrecision(3)
  }
  function converterMoeda() {
    let entrada = document.querySelector('#deMoe').value
    let saida = document.querySelector('#paraMoe').value
    let valIn = parseFloat(document.querySelector('#valIn').value)
    let result
  
    switch (entrada) {
      case "r":
        switch (saida) {
          case "r":
            result = valIn
            break;
          case "ud":
            result = valIn*0.19 
            break;
          case "cd":
            result = valIn*0.24
            break;
          case "e":
            result = valIn*0.16
            break
        }
        break;
      case "ud":
        switch (saida) {
          case "r":
            result = valIn*5.22
            break;
          case "ud":
            result = valIn 
            break;
          case "cd":
            result = valIn*1.26
            break;
          case "e":
            result = valIn*0.85
            break
        }
        break;
      case "cd":
        switch (saida) {
          case "r":
            result = valIn*4.14
            break;
          case "ud":
            result = valIn*0.79
            break;
          case "cd":
            result = valIn
            break;
          case "e":
            result = valIn*0.67
            break
        }
        break;
      case "e":
        switch (saida) {
          case "r":
            result = valIn*6.17
            break;
          case "ud":
            result = valIn*1.18
            break;
          case "cd":
            result = valIn*1.49
            break;
          case "e":
            result = valIn
            break
        }
        break
    }
    
    let resultHTML = document.querySelector('#result')
    resultHTML.value = result.toFixed(2)
  }
  
  function tipoUnidade() {
    let tipo = document.querySelector('#tipo').value
    let numberInput = document.querySelector('#numberInput')
    let botao = document.querySelector('.botao')
    let subTitle = document.querySelector('#subTitle')
    let obsMoe = document.querySelector('#obsMoe')
    
    let temp = document.querySelector('#inputTemp')
    let time = document.querySelector('#inputTime')
    let dist = document.querySelector('#inputDist')
    let mas = document.querySelector('#inputMas')
    let moe = document.querySelector('#inputMoe')
    
    off(temp);off(time);off(dist);off(mas);off(moe);off(obsMoe)
    
    switch (tipo){
      case "temp":
        subTitle.innerHTML = "Conversor de Temperaturas"
        on(subTitle)
        on(temp)
        break
      case "time":
        subTitle.innerHTML = "Conversor de Tempo"
        on(subTitle)
        on(time)
        break
      case "dist":
        subTitle.innerHTML = "Conversor de Comprimento"
        on(subTitle)
        on(dist)
        break
      case "mas":
        subTitle.innerHTML = "Conversor de Massa"
        on(subTitle)
        on(mas)
        break
      case "moe":
        subTitle.innerHTML = "Conversor de Moeda"
        on(subTitle)
        on(moe)
        on(obsMoe)
        break
    }
    on(numberInput);on(botao)
  }
  function converter() {
    let tipo = document.querySelector('#tipo').value
    switch (tipo){
      case "temp":
        converterTemperatura()
        break
      case "time":
        converterTempo()
        break
      case "dist":
        converterComprimento()
        break
      case "mas":
        converterMassa()
        break
      case "moe":
        converterMoeda()
        break
    }
  }