let count=0;
  for(let i=0;i<N;i++){
  if(str[i]==str[N-1-i])
     {count++;
      continue;
     
  }else{
      console.log("No");
      break;
  }
  }
  if(count>0)
  {
      console.log("Yes");
  }