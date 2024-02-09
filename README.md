<p align="center">
<img src="https://raw.githubusercontent.com/AryanVBW/SOP/main/92390419.jpeg" height="200"><br>
<h1>Hello, I'm Vivek 👋</h1>
</p>

# Chapter Wise SOP List

## Advanced Web Designing
<details>
<summary>SOP 1</summary>

*[Click here to view codes.](https://github.com/AryanVBW/SOP/tree/main/chap_1-sop/sop1)*
</details>

<details>
<summary>SOP 2</summary>

*[Click here to view codes.](https://github.com/AryanVBW/SOP/tree/main/chap_1-sop/sop2)*
</details>

<details>
<summary>SOP 3</summary>

*[Click here to view codes](https://github.com/AryanVBW/SOP/tree/main/chap_1-sop/sop3)*
</details>

<details>
<summary>SOP 4</summary>

*[Click here to view codes](https://github.com/AryanVBW/SOP/tree/main/chap_1-sop/sop4)*
</details>

<details>
<summary>SOP 5</summary>

*[Click here to view codes](https://github.com/AryanVBW/SOP/tree/main/chap_1-sop/sop5)*
</details>

## JavaScript
<details>
<summary>SOP 1</summary>

*You can simply copy and paste this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Sop 2 JavaScript</title>
</head>
<body>
    <h1>Information Form</h1>

<form name="f1">
    Your Name
<input type="text" name="txt_name">
<br>
<br>
Address
<textarea name="txt_address" placeholder="Permanent Address"></textarea>
<br>
<br>
Contact
<input type="tel" name="telephone" maxlength="10">
<br><br>

Email
<input type="email" name="txt_email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}">
<br>
<br>

<input type="button" name="b1" value="submit" onclick="validate_email()">
</form>
</body>

<script type="text/javascript">
    function validate_email()
    {
        var x=f1.txt_email.value;
        var at_pos=x.indexOf("@");
        var last_pos=x.lastIndexOf("@");
        var firstdot_pos=x.indexOf(".");
        var dot_pos=x.lastIndexOf(".");

        if (at_pos<1||dot_pos<at_pos+2||dot_pos+2>=x.length||firstdot_pos<at_pos||at_pos<last_pos)
        {
            alert("Not an Valid email address");
            f1.txt_email.focus();
        }
        else
        {
            alert("Valid Email Address");
            return true;
        }
    }
    
</script>
       <br>
       <br>
  <footer>
      <div class="footer__bottom ai-c jc-sb px-6">
        <div class="footer__bottom__copyright co-l">
          Copyright© 2022 All Rights Reserved <b>*Vivek Wagadare*</b> <br>
          This website is made by vivek wagadare under the guidance of the <b>jyotsna mam </b>(IT & Computer Science Teacher ARIHANT COLLEGE,camp)
        </div>
       
    
    </footer>
  
</html>
```
*
</details>

<details>
<summary>SOP 2</summary>

*You can simply copy and paste this:

```html
<!DOCTYPE html>

<html>

<head>

	<title>Sop 3 JAVasript Count vowels</title>

</head>

<body>

<form name="form1">

	<h1>Enter the String whose vowel isto be counted</h1>

	<input type="text" name="text1"> 

	<input type="button" name="btn_checkvowel" value="Click to count" onclick="count()">

</form>

<script type="text/javascript">

	function count()

	{

		var i,ch,str,counter=0;

		str=form1.text1.value;

		for(i=0;i<str.length;i++)

		{

			ch=str.charAt(i);

			if(ch=='A'||ch=='a'||ch=='e'||ch=='E'||ch=='i'||ch=='I'||ch=='o'||ch=='O'||ch=='u'||ch=='U')

				counter++;

		}

		alert("Number of Vowels in Entered String is:"+counter);

	}

</script>

</body>

<br><br>

  <footer>

      <div class="footer__bottom ai-c jc-sb px-6">

        <div class="footer__bottom__copyright co-l">

          Copyright© 2022 All Rights Reserved <b>*Vivek Wagadare*</b> <br>

     	    This website is made by vivek wagadare under the guidance of the <b>jyotsna mam </b>(IT & Computer Science Teacher ARIHANT COLLEGE,camp)

        </div>

       

    

    </footer>

  

</html>

```
*
</details>

<details>
<summary>SOP 3</summary>

*You can simply copy and paste this:

```html
<!DOCTYPE html>

<html>

<head>

	<title>JavaScript SOP 4 Example</title>

</head>

<body>

<form name="f1">

	Enter the string to check it is palindrome or not! 

	<br>

	<input type="text" name="t1">

	<br>

	<br>

	<input type="button" name="check_palin" value="Check String" onclick="chk_palindrome()">

</form>

<script type="text/javascript">

	function chk_palindrome()

	{

		var str,str_case,i,len;

		str=f1.t1.value;

		str_case=str.toLowerCase();

		len=str_case.length;

		var p=1;

		for(i=0;i<len/2;i++)

		{

			if(str_case.charAt(i)!=str_case.charAt(len-1-i))

			{

				p=0;

				break;

			}

		}

		if(p==1)

		{

			alert("Entered string is Palindrome");

		}

		else

		{

			alert("Entered string is Not a Palindrome")

		}

		

	}

</script>



</body>

  <footer>

      <div class="footer__bottom ai-c jc-sb px-6">

        <div class="footer__bottom__copyright co-l">

          Copyright© 2022 All Rights Reserved <b>*Vivek Wagadare*</b> <br>

     	    This website is made by vivek wagadare under the guidance of the <b>jyotsna mam </b>(IT & Computer Science Teacher ARIHANT COLLEGE,camp)

        </div>

       

    

    </footer>

  

</html>
```
*
</details>

<details>
<summary>SOP 4</summary>

*You can simply copy and paste this:

```html
<!DOCTYPE html>

<html>

<head>

	<title>SOP 4 Javascript</title>

<body>



<h2>JavaScript code to convert Celcius to Fahrenhiet </h2>

<br>

<p>Enter the Temperature</p>



<p><input type="text" id="txt_celsius" onkeyup="convert('C')"> Temperature in degree Celsius</p>

<br>

<p><input type="text" id="txt_fah" onkeyup="convert('F')"> Temperature in degree Fahrenheit</p> 



<script>

function convert(temperature) {

  var t;

  if (temperature == "C") //Celsius to fahrenit

  {

    t = document.getElementById("txt_celsius").value * 9 / 5 + 32;

    document.getElementById("txt_fah").value = Math.round(t);

  } 

  else           //fahrenirt to celsius

   {

    t = (document.getElementById("txt_fah").value -32) * 5 / 9;

    document.getElementById("txt_celsius").value = Math.round(t);

  }

}

</script>



//Note:-you can remove math.round function if you need answer in decimal





</body>

<br><br>

  <footer>

      <div class="footer__bottom ai-c jc-sb px-6">

        <div class="footer__bottom__copyright co-l">

          Copyright© 2022 All Rights Reserved <b>*Vivek Wagadare*</b> <br>

     	    This website is made by vivek wagadare under the guidance of the <b>jyotsna mam </b>(IT & Computer Science Teacher ARIHANT COLLEGE,camp)

        </div>

       

    

    </footer>

  

</html>
```
*
</details>

## Server Side Scripting
<details>
<summary>SOP 1</summary>

*You can simply copy and paste this:

```html*
</details>

<details>
<summary>SOP 2</summary>

*You can simply copy and paste this:

```html*
</details>

<details>
<summary>SOP 3</summary>

*You can simply copy and paste this:

```html*
</details>
<p align="center">
<img src="https://raw.githubusercontent.com/AryanVBW/SOP/main/textbook/1.jpg" height=""><br>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/AryanVBW/SOP/main/textbook/2.jpg" height=""><br>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/AryanVBW/SOP/main/textbook/3.jpg" height=""><br>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/AryanVBW/SOP/main/textbook/4.jpg" height=""><br>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/AryanVBW/SOP/main/textbook/5.jpg" height=""><br>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/AryanVBW/SOP/main/textbook/6.jpg" height=""><br>
</p>
<p align="center">
<img src="https://raw.githubusercontent.com/AryanVBW/SOP/main/textbook/7.jpg" height=""><br>
</p>
