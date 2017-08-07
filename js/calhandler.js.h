string calId;
string apiKey;
object eventCache;

object-promised getDay(int year,int month,int day);
object-promised getMonth(int year,int month);
void cacheResponse(int month,array data);