# --- GIAI ĐOẠN 1: BUILD ỨNG DỤNG ---
# Sử dụng base image Maven với OpenJDK 21 để build dự án
FROM openjdk:21-slim-buster
# Đã cập nhật phiên bản Maven và OpenJDK

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Copy file pom.xml và các thư mục src/ để tận dụng cache của Docker
COPY pom.xml .
COPY src ./src

# Build ứng dụng. -DskipTests để bỏ qua việc chạy các unit tests khi build Docker image
RUN mvn clean package -DskipTests

# --- GIAI ĐOẠN 2: CHẠY ỨNG DỤNG ---
# Sử dụng base image nhẹ hơn chỉ chứa JRE (Java Runtime Environment) cho Java 21
FROM openjdk:21-slim-buster

# Đặt thư mục làm việc bên trong container
WORKDIR /app

# Copy file JAR đã được build từ giai đoạn 'build' vào giai đoạn hiện tại
# Dòng này sẽ lấy bất kỳ file .jar nào trong thư mục target/ và đổi tên nó thành app.jar
# Đây là cách linh hoạt nhất, vì bạn không cần biết chính xác tên file JAR.
COPY --from=build /app/target/*.jar app.jar

# Mở cổng mà ứng dụng Spring Boot của bạn đang lắng nghe
# Mặc định Spring Boot chạy trên cổng 8080
EXPOSE 8080

# Lệnh để khởi động ứng dụng Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]
