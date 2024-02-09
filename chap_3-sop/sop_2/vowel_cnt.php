<?php

if(isset($_POST['submit']))

{

$str strtolower($_POST['txt_string']);

$vowel array('a', 'e', 'i', 'o', 'u');

$len-strlen($str);

$num=0;

for ($i=0;$i<$len;$i++)

{

if(in_array($str[$i], $vowel))

{

$num++;

}

}

echo "<b>Number of Vowels in entered string is: ".$num;

}