

truncate table "dadari-db"."comparison_value" cascade;
truncate table "dadari-db"."comparison_item" cascade;
truncate table "dadari-db"."membership" cascade;
truncate table "dadari-db"."subscription_service" cascade;
truncate table "dadari-db"."category" cascade;


INSERT INTO "dadari-db"."category" ("id","nameKr","nameEng","description","logoPath","sort","template","createdAt","updatedAt") VALUES (1,'영화/드라마','movie','영화/드라마','/logo/category/movie.jpg',1,'1 2 2 1 1','2022-09-04 08:16:46.832 +00:00','2022-09-04 08:16:46.832 +00:00'),(2,'음악','music','음악','/logo/category/music.jpg',2,'1 1 1 1 1','2022-09-04 08:16:46.832 +00:00','2022-09-04 08:16:46.832 +00:00') RETURNING "id","nameKr","nameEng","description","logoPath","sort","template","createdAt","updatedAt";
INSERT INTO "dadari-db"."subscription_service" ("id","nameEng","nameKr","logoPath","description","updateBy","createBy","createdAt","updatedAt","categoryId") VALUES (1,'netflex','넷플렉스','/images/logo/netflex.png','1등서비스','admin','admin','2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1),(2,'youtube','유튜브','/images/logo/youtube.png','유튜브','admin','admin','2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1),(3,'disney plus','디즈니플러스','/logo/subscriptionService/disney_plus.jpg','마블','admin','admin','2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1) RETURNING "id","nameEng","nameKr","logoPath","description","updateBy","createBy","createdAt","updatedAt","categoryId";
INSERT INTO "dadari-db"."membership" ("id","name","grade","createdAt","updatedAt","subscriptionServiceId") VALUES (1,'베이식',1,'2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1),(2,'스탠다드',2,'2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1),(3,'프리미엄',3,'2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1) RETURNING "id","name","grade","createdAt","updatedAt","subscriptionServiceId";
INSERT INTO "dadari-db"."comparison_item" ("id","name","unit","type","sort","createdAt","updatedAt","categoryId") VALUES (1,'가격','원','NUMBER',3,'2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1),(2,'제공서비스','','TEXT',2,'2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1),(3,'구독기간','','TEXT',3,'2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1),(4,'무료기간','','TEXT',4,'2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1),(5,'제휴해택','','TEXT',5,'2022-09-04 08:16:46.834 +00:00','2022-09-04 08:16:46.834 +00:00',1) RETURNING "id","name","unit","type","sort","createdAt","updatedAt","categoryId";
INSERT INTO "dadari-db"."comparison_value" ("id","value","createdAt","updatedAt","membershipId","comparisonItemId") VALUES (1,'9500','2022-09-04 08:16:46.835 +00:00','2022-09-04 08:16:46.835 +00:00',1,1),(2,'영화, 드라마','2022-09-04 08:16:46.835 +00:00','2022-09-04 08:16:46.835 +00:00',1,2),(3,'월','2022-09-04 08:16:46.835 +00:00','2022-09-04 08:16:46.835 +00:00',1,3),(4,'1개월','2022-09-04 08:16:46.835 +00:00','2022-09-04 08:16:46.835 +00:00',1,4),(5,'KT통신사 제휴','2022-09-04 08:16:46.835 +00:00','2022-09-04 08:16:46.835 +00:00',1,5) RETURNING "id","value","createdAt","updatedAt","categoryId","membershipId","comparisonItemId";