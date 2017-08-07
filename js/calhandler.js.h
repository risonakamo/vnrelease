string calId; //vn calendar id
string apiKey;

object eventCache; //organised by month -> string date -> array of events
object-array dayCache; //array of day objects containing events

int currYear;
int currMonth;
int currIndex;

void getCurrDay();
void getNextDay();

object-promised getDay(int year,int month,int day);
object-promised getMonth(int year,int month);

/*-- private --*/
void cacheResponse(int month,object-array data); //cache a month response