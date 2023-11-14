package config

import (
	"time"

	"github.com/spf13/viper"
)

type Config struct {
	DBHost     string `mapstructure:"POSTGRES_HOST"`
	DBUser     string `mapstructure:"POSTGRES_USER"`
	DBPassword string `mapstructure:"POSTGRES_PASSWORD"`
	DBName     string `mapstructure:"POSTGRES_DB"`
	DBPort     string `mapstructure:"POSTGRES_PORT"`

	ServerPort string `mapstructure:"PORT"`

	TokenSecret     string        `mapstructure:"TOKEN_SECRET"`
	TokenExpiration time.Duration `mapstructure:"TOKEN_EXPIRATION"`
	TokenMaxAge     int           `mapstructure:"TOKEN_MAX_AGE"`
}

func LoadConfig(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigType("env")
	viper.SetConfigName("app")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}
	viper.Unmarshal(&config)
	return
}
