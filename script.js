{\rtf1\ansi\ansicpg1251\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;\f1\fnil\fcharset0 Menlo-Italic;}
{\colortbl;\red255\green255\blue255;\red81\green157\blue235;\red17\green25\blue34;\red155\green162\blue177;
\red136\green185\blue102;\red184\green93\blue213;\red108\green113\blue123;\red214\green85\blue98;\red222\green180\blue104;
\red72\green168\blue181;\red140\green211\blue254;\red197\green136\blue83;}
{\*\expandedcolortbl;;\cssrgb\c38039\c68627\c93725;\cssrgb\c8235\c13333\c18039;\cssrgb\c67059\c69804\c74902;
\cssrgb\c59608\c76471\c47451;\cssrgb\c77647\c47059\c86667;\cssrgb\c49804\c51765\c55686;\cssrgb\c87843\c42353\c45882;\cssrgb\c89804\c75294\c48235;
\cssrgb\c33725\c71373\c76078;\cssrgb\c61176\c86275\c99608;\cssrgb\c81961\c60392\c40000;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs30 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 $\cf4 \strokec4 (\cf5 \strokec5 ".currencyField"\cf4 \strokec4 ).\cf2 \strokec2 keyup\cf4 \strokec4 (\cf6 \strokec6 function\cf4 \strokec4 ()\{ 
\f1\i \cf7 \strokec7 //input[name='calc']
\f0\i0 \cf4 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3  \cf6 \strokec6 let\cf4 \strokec4  \cf8 \strokec8 convFrom\cf4 \strokec4 ;\cb1 \
\cb3  \cf6 \strokec6 if\cf4 \strokec4 (\cf2 \strokec2 $\cf4 \strokec4 (\cf9 \strokec9 this\cf4 \strokec4 ).\cf2 \strokec2 prop\cf4 \strokec4 (\cf5 \strokec5 "name"\cf4 \strokec4 ) \cf10 \strokec10 ==\cf4 \strokec4  \cf5 \strokec5 "btc"\cf4 \strokec4 ) \{\cb1 \
\cb3        \cf8 \strokec8 convFrom\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 "btc"\cf4 \strokec4 ;\cb1 \
\cb3        \cf8 \strokec8 convTo\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 "usd"\cf4 \strokec4 ;\cb1 \
\cb3  \}\cb1 \
\cb3  \cf6 \strokec6 else\cf4 \strokec4  \{\cb1 \
\cb3        \cf8 \strokec8 convFrom\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 "usd"\cf4 \strokec4 ;\cb1 \
\cb3        \cf8 \strokec8 convTo\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf5 \strokec5 "btc"\cf4 \strokec4 ;\cb1 \
\cb3  \}\cb1 \
\cb3  \cf8 \strokec8 $\cf4 \strokec4 .\cf2 \strokec2 getJSON\cf4 \strokec4 ( \cf5 \strokec5 "https://api.coindesk.com/v1/bpi/currentprice/usd.json"\cf4 \strokec4 , \cb1 \
\cb3     \cf6 \strokec6 function\cf4 \strokec4 ( 
\f1\i \cf11 \strokec11 data
\f0\i0 \cf4 \strokec4 ) \{\cb1 \
\cb3     \cf6 \strokec6 var\cf4 \strokec4  \cf8 \strokec8 origAmount\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf10 \strokec10 parseFloat\cf4 \strokec4 (\cf2 \strokec2 $\cf4 \strokec4 (\cf5 \strokec5 "input[name='"\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf8 \strokec8 convFrom\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf5 \strokec5 "']"\cf4 \strokec4 ).\cf2 \strokec2 val\cf4 \strokec4 ());        \cb1 \
\cb3     \cf6 \strokec6 var\cf4 \strokec4  \cf8 \strokec8 exchangeRate\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf10 \strokec10 parseInt\cf4 \strokec4 (\cf8 \strokec8 data\cf4 \strokec4 .\cf8 \strokec8 bpi\cf4 \strokec4 .\cf9 \strokec9 USD\cf4 \strokec4 .\cf8 \strokec8 rate_float\cf4 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 let\cf4 \strokec4  \cf8 \strokec8 amount\cf4 \strokec4 ;\cb1 \
\cb3     \cf6 \strokec6 if\cf4 \strokec4 (\cf8 \strokec8 convFrom\cf4 \strokec4  \cf10 \strokec10 ==\cf4 \strokec4  \cf5 \strokec5 "btc"\cf4 \strokec4 )\cb1 \
\cb3        \cf8 \strokec8 amount\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf10 \strokec10 parseFloat\cf4 \strokec4 (\cf8 \strokec8 origAmount\cf4 \strokec4  \cf10 \strokec10 *\cf4 \strokec4  \cf8 \strokec8 exchangeRate\cf4 \strokec4 );\cb1 \
\cb3     \cf6 \strokec6 else\cf4 \cb1 \strokec4 \
\cb3        \cf8 \strokec8 amount\cf4 \strokec4  \cf10 \strokec10 =\cf4 \strokec4  \cf10 \strokec10 parseFloat\cf4 \strokec4 (\cf8 \strokec8 origAmount\cf10 \strokec10 /\cf4 \strokec4  \cf8 \strokec8 exchangeRate\cf4 \strokec4 ); \cb1 \
\cb3     \cf2 \strokec2 $\cf4 \strokec4 (\cf5 \strokec5 "input[name='"\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf8 \strokec8 convTo\cf4 \strokec4  \cf10 \strokec10 +\cf4 \strokec4  \cf5 \strokec5 "']"\cf4 \strokec4 ).\cf2 \strokec2 val\cf4 \strokec4 (\cf8 \strokec8 amount\cf4 \strokec4 .\cf2 \strokec2 toFixed\cf4 \strokec4 (\cf12 \strokec12 2\cf4 \strokec4 ));\cb1 \
\cb3     \});\cb1 \
\cb3 \});\cb1 \
}