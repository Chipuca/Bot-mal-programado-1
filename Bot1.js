//iimPlay("CODE:WAIT SECONDS=2")
//iimPlay("click1.iim");
//iimPlay("CODE:WAIT SECONDS=2")

/*run macro*/

var i = 0;
var coinbet = 0.0000000;
var cointo = 0;
var z = 0;
var time = 20000
var u = 0.10020000042;
let nadalkeios = '\n';
var m = 0;
let h = 0;
var n = 0.00000030;
iimPlay("CODE:WAIT SECONDS=2")
iimPlay("CODE:CLICK X=411 Y=542")
iimPlay("CODE:WAIT SECONDS=2")


while(true) {
		let h = Math.floor(Math.random()*30 + 1);
		iimPlay("CODE:WAIT SECONDS=0.2")
		n = n * 2;
		
		if(z>6)
		{
		
		
		
		}else{
			iimPlay("CODE:WAIT SECONDS=1");
		    		iimPlayCode("SET !ERRORIGNORE YES"
				+ nadalkeios + "SET !TIMEOUT_PAGE 60"
				+ nadalkeios + "SET !TIMEOUT_STEP 10"
				+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=" + n
				+ nadalkeios + "WAIT SECONDS=0.2"
				+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
				+ nadalkeios + "WAIT SECONDS=0.2"
				+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
		
		
				
				
			)
		
		}
		
		
		
	
		
		iimPlay("CODE:WAIT SECONDS=4.1")
		
		var result = window.content.document.getElementsByClassName("glyphicon-ok")[0].getAttribute('style');
		//alert(result);
		iimPlay("CODE:WAIT SECONDS=1");
		z++;
		if((z % 2 ) == 0)
		{
			n = n * 5;
		}
		
		if((z % 6 ) == 0)
		{
			iimPlayCode("SET !ERRORIGNORE YES"
		+ nadalkeios + "SET !TIMEOUT_PAGE 60"
		+ nadalkeios + "SET !TIMEOUT_STEP 10"
		+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=" + u
		+ nadalkeios + "WAIT SECONDS=0.5"
		+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
		+ nadalkeios + "WAIT SECONDS=1"
		+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
		+ nadalkeios + "WAIT SECONDS=2"
		+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
		+ nadalkeios + "WAIT SECONDS=0.2"


		
		
			)	
			u = u * 4;
			if(u>4.0){
				u = 0.10020000042;
			}
			n = n / 18;
			
			
			while(true) {
				let h = Math.floor(Math.random()*10 + 1);
				iimPlay("CODE:WAIT SECONDS=1");
			         m++;
			         iimPlay("CODE:WAIT SECONDS=4");
			         
			         var resultt = window.content.document.getElementsByClassName("glyphicon-ok")[0].getAttribute('');
				//alert(result);
				// iimPlay("CODE:WAIT SECONDS=2");
				//break;
				iimPlay("CODE:WAIT SECONDS=2");
				if(resultt=="")
				{
					//alert(i);
					iimPlay("CODE:WAIT SECONDS=1");
					m=0;
					iimPlay("CODE:WAIT SECONDS=1");
					break;
					alert(m);
				
				}else{
					//z=0;
					
					if(m==1)
					{
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=8.3001000"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					}
					if(m==2)
					{
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=18.20001000"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					        
					}
					if(m==3)
					{
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=10.200000800"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					       
					}
					if(m==4){
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=15.500001400"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					        
					}
					if(m>4){
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=3.500001800"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					       
					}
					
				
				}
		}
			
		}
		
		if(z>6)
		{
			iimPlay("CODE:WAIT SECONDS=0.2");
			
    		iimPlayCode("SET !ERRORIGNORE YES"
		+ nadalkeios + "SET !TIMEOUT_PAGE 60"
		+ nadalkeios + "SET !TIMEOUT_STEP 10"
		+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00020000042"
		+ nadalkeios + "WAIT SECONDS=0.5"
		+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
		+ nadalkeios + "WAIT SECONDS=1"
		+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
		+ nadalkeios + "WAIT SECONDS=2"
		+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
		+ nadalkeios + "WAIT SECONDS=0.2"


		
		
	)			
	//iimPlay("CODE:WAIT SECONDS=0.2");
	if ( n > 0.080526 ) {
			n = 0.00000030;
		}

		while(true) {
				let h = Math.floor(Math.random()*10 + 1);
				iimPlay("CODE:WAIT SECONDS=1");
			         m++;
			         iimPlay("CODE:WAIT SECONDS=4");
			         
			         var resultt = window.content.document.getElementsByClassName("glyphicon-ok")[0].getAttribute('style');
				//alert(result);
				// iimPlay("CODE:WAIT SECONDS=2");
				//break;
				iimPlay("CODE:WAIT SECONDS=2");
				if(resultt=="")
				{
					//alert(i);
					iimPlay("CODE:WAIT SECONDS=1");
					m=0;
					iimPlay("CODE:WAIT SECONDS=1");
					break;
					alert(m);
				
				}else{
					//z=0;
					
					if(m==1)
					{
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=1.3001000"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					}
					if(m==2)
					{
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=18.20001000"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					        
					}
					if(m==3)
					{
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=10.200000800"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					       
					}
					if(m==4){
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=15.500001400"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					        
					}
					if(m>4){
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=3.500001800"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					       
					}
					
				
				}
		}
		}
		
		if(result=="")
		{
		
		}else{
			n = 0.00000030;
			iimPlay("CODE:WAIT SECONDS=0.2");
			z=0;
			iimPlayCode("SET !ERRORIGNORE YES"
				+ nadalkeios + "SET !TIMEOUT_PAGE 60"
				+ nadalkeios + "SET !TIMEOUT_STEP 10"
				+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.120000042"
				+ nadalkeios + "WAIT SECONDS=2"
				+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
				+ nadalkeios + "WAIT SECONDS=0.2"
				+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
				+ nadalkeios + "WAIT SECONDS=0.2"
				+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
			         )
		
			while(true) {
				let h = Math.floor(Math.random()*10 + 1);
				iimPlay("CODE:WAIT SECONDS=1");
			         i++;
			         iimPlay("CODE:WAIT SECONDS=4");
			         
			         var result = window.content.document.getElementsByClassName("glyphicon-ok")[0].getAttribute('');
				//alert(result);
				iimPlay("CODE:WAIT SECONDS=2");
				// iimPlay("CODE:WAIT SECONDS=2");
				//break;
				if(result=="")
				{
					//alert(i);
					iimPlay("CODE:WAIT SECONDS=1");
					i=0;
					iimPlay("CODE:WAIT SECONDS=2");
					break;
					iimPlay("CODE:WAIT SECONDS=1");
					alert(i);
				/*
					iimPlayCode("SET !ERRORIGNORE YES"
					+ nadalkeios + "SET !TIMEOUT_PAGE 60"
					+ nadalkeios + "SET !TIMEOUT_STEP 10"
					+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000700"
					+ nadalkeios + "WAIT SECONDS=2"
					+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
			
					
				         )
				         iimPlay("CODE:WAIT SECONDS=2");
					 break;*/
				}else{
					z=0;
					
					if(i==1)
					{
						
					}
					if(i==2)
					{
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=3.120001000"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					        
					}
					if(i==3)
					{
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=18.000000800"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					       
					}
					if(i==4){
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=3.200001400"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					        
					}
					if(i>4){
						iimPlayCode("SET !ERRORIGNORE YES"
							+ nadalkeios + "SET !TIMEOUT_PAGE 60"
							+ nadalkeios + "SET !TIMEOUT_STEP 10"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=3.500001800"
							+ nadalkeios + "WAIT SECONDS=2"
							+ nadalkeios + "TAG POS=5 TYPE=INPUT:TEXT ATTR=* CONTENT=" + h
							+ nadalkeios + "WAIT SECONDS=1"
							+ nadalkeios + "EVENT TYPE=CLICK SELECTOR=\"HTML>BODY>DIV:nth-of-type(5)>DIV>DIV>DIV:nth-of-type(2)>DIV>DIV>DIV>DIV>DIV>DIV:nth-of-type(4)>DIV>BUTTON\" BUTTON=0"
							+ nadalkeios + "WAIT SECONDS=0.2"
							+ nadalkeios + "TAG POS=2 TYPE=INPUT:TEXT ATTR=* CONTENT=0.00000000"
							
						         )
					       
					}
					
				
				}
			}
		}
		
		//iimPlay("CODE:WAIT SECONDS=2")
	
}
