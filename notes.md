sandipbgt.com/theastrologer/api  /sunsigns

first screen:
-- useState(sunsign), useEffect(api call,[])
 - API call sunsigns
 - map sunsign buttons
 - Return Button


second screen: 
-- useState(timeframe), useEffect(api call,[timeframe, sunsign])
    (if sunsign is true)
  - API call timeframe
  - map timeframe buttons
  - Return Button

 
third screen:
  (if sunsign and timeframe is true)
  - render horoscope 
  - Return Button


