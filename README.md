# PatternFly Showcase

Showcase for [PatternFly Java](https://github.com/patternfly-java/patternfly-java).

## Get Started

### Development Mode

- `mvn clean j2cl:watch`
- start tomcat in another terminal: `mvn tomcat7:run`
- open http://localhost:8080/patternfly-showcase

### Production mode

- `mvn package -P prod`
- Find the compiled web app in `target/patternfly-showcase`
